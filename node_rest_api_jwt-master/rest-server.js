const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const socketIO = require('socket.io');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const app = express();
const httpServer = http.createServer(app);
const io = socketIO(httpServer);

var allSockets = [];

const config = {
    secret: "supersecret"
}

io.on("connection", (socket) => {

    allSockets.push(socket);
    console.log("Client connected...");
    socket.emit("data", "Some data...");
})


var customers = [];

function initData(){
    customers.push({id: 1, name: "Google", location: "Bangalore"});
    customers.push({id: 2, name: "Microsoft", location: "Hyderabad"});
    customers.push({id: 3, name: "Apple", location: "Bangalore"});
    customers.push({id: 4, name: "Reliance", location: "Mumbai"});
}

initData();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
//enable Cross-Origin requests
app.use(function(req, resp, next){

    resp.setHeader("Access-Control-Allow-Origin", "*");
    resp.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    resp.setHeader("Access-Control-Allow-Headers", "*");
    next();
})


app.get("/", (req, resp)=> {
    resp.status(200);
    resp.write("Node Express REST API's");
    resp.end();
})
app.post("/login", (req, resp)=>{

    var userName = req.header("username");
    var password = req.header("password");

    if(userName === "admin" && password === "admin"){

        var token = jwt.sign({ id: userName }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
          });
          resp.status(200).send({ auth: true, token: token });  
    }else{
        resp.status(400).send("Invalid credentionals.")
    }

})

app.get("/customers", (req, resp)=> {

    var token = req.headers['x-access-token'];
    if (!token){
        return resp.status(401).send({ auth: false, message: 'No token provided.' });
    } 
  
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) return resp.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    });
        
    
    
    resp.json(customers);

});

app.get("/customers/:id", (req, resp) => {


    var token = req.headers['x-access-token'];
    if (!token){
        return resp.status(401).send({ auth: false, message: 'No token provided.' });
    } 
  
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) return resp.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    });


    var id = parseInt(req.params.id);
    var filteredCustomers =  customers.filter((item) => item.id === id);
    if(filteredCustomers[0]){
        resp.json(filteredCustomers[0]);
    }else{
        resp.status(404);
        resp.json(null);
    }
})

app.post("/customers", (req, resp)=>{

    var token = req.headers['x-access-token'];
    if (!token){
        return resp.status(401).send({ auth: false, message: 'No token provided.' });
    } 
  
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) return resp.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    });
    
    var customer = req.body;
    try {
        var index = customers.findIndex((cust) => cust.id === req.body.id);
        if(index !== -1){
            //Bad Request
            resp.status(400);
            resp.json(null);
        }
        else{
            customers.push(customer);

            allSockets.forEach(socket => {
                socket.emit("newCustomer", customer);
            })

            resp.status(201);
            resp.setHeader("location", "customers/" + customer.id);
            resp.json(null);
        }
    } catch (error) {
        resp.status(503);
        resp.json(null);
    }
    
})

app.put("/customers", function(req, resp){

    console.log("Invoking /customers PUT request...." + req.body.id);

    var token = req.headers['x-access-token'];
    if (!token){
        return resp.status(401).send({ auth: false, message: 'No token provided.' });
    } 
  
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) return resp.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    });
    
    var index = customers.findIndex((cust) => cust.id === req.body.id);

    
    if(index === -1){
        resp.status(404);
        resp.json(null);
    }else{
        
        
        console.log(index);
        customers[index] = req.body;
        allSockets.forEach(socket => {
            socket.emit("updatedCustomer", req.body);
        })
        resp.status(200);
        resp.json(null);
    }

    

})

// Customers DELETE
app.delete("/customers/:id", function(req, resp){

    console.log("Invoking /customers/" + req.params.id +  " DELETE request....");

    var token = req.headers['x-access-token'];
    if (!token){
        return resp.status(401).send({ auth: false, message: 'No token provided.' });
    } 
  
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) return resp.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    });
    var id = parseInt( req.params.id);
    
    var index = customers.findIndex((cust) => cust.id === id);
  
    if(index != -1){
         customers.splice(index, 1);
         allSockets.forEach(socket => {
            socket.emit("deletedCustomer", index);
        })
         resp.json(null);
    }else{
        
        resp.status(404);
        resp.json(null);
    }
    
})

// app.listen(8090, () => {
//     console.log("REST API server started");
// });

var port = process.env.PORT || 9090
httpServer.listen(port, () => {
    console.log("Secure REST API server started at Port: " + port);
});