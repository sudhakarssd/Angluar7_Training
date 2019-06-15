var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
  app = express(),
  port = 9000;
fs.readFile('Customers', 'utf8', function(err, contents){
   var json = JSON.parse(contents);
   var i = 1;
   json.forEach(function(customer){
       customersMap.set(i, customer);
       i++;
   })
})
var customersMap = new Map();


// convert request to JSON Object
app.use(bodyParser.json());

//enable Cross-Origin requests
app.use(function(req, resp, next){

    resp.setHeader("Access-Control-Allow-Origin", "*");
    resp.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    resp.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers");
    next();
})

// Http GET request /hello
// fetch all customers
app.get("/hello", function(req, resp){

    resp.json({"msg": "Hello REST Web Services"});    
})

// Http GET request /customers
app.get("/customers", function(req, resp){

    console.log("Invoking /customers GET request....");
    resp.contentType("application/json");
    var array = new Array();
    customersMap.forEach(function(value, index){
        array.push(value);
    });
    resp.json(array);
})

// Http GET request /customers/:id
// fetch customer by id
app.get("/customers/:id", function(req, resp){

    console.log("Invoking /customers/" + req.params.id +  " GET request....");
    var id = parseInt( req.params.id);
    resp.contentType("application/json");
    var temp = null;
    temp = customersMap.get(id);    
  
    if(typeof temp != 'undefined'){
         resp.json(temp);
    }else{
        
        resp.status(404);
        resp.json(null);
    }
    
    
})

// Http POST request /customers
// create customer
app.post("/customers", function(req, resp){

    console.log("Invoking /customers POST request....");
    if(Object.keys(req.body).length === 0){
        console.log("Resource not created. Invalid data...");
        resp.status(400);
        resp.json(null);
    }else{
        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        if(typeof customersMap.get(req.body.id) == 'undefined'){
   
            customersMap.set(req.body.id, req.body);
            resp.status(201);
            resp.setHeader("location", fullUrl + "/" + req.body.id);
            console.log("Resource created successfully...");
            resp.json(null);
        }
        else{
            console.log("Resource not created. Duplicate id...");
            resp.status(400);
            resp.json(null);
        }
    }
})

// Http PUT request /customers
//update customer
app.put("/customers", function(req, resp){

    console.log("Invoking /customers PUT request...." + req.body.id);
    
    if(typeof customersMap.get(req.body.id) == 'undefined'){
        resp.status(404);
        resp.json(null);
    }else{
        var customer = req.body;
        customersMap.set(customer.id, customer);
        resp.status(200);
        resp.json(null);
    }

    

})

// Customers DELETE
app.delete("/customers/:id", function(req, resp){

    console.log("Invoking /customers/" + req.params.id +  " DELETE request....");
    var id = parseInt( req.params.id);
    var temp = null;
    temp = customersMap.get(id);    
  
    if(typeof temp != 'undefined'){
         customersMap.delete(id);
         resp.json(null);
    }else{
        
        resp.status(404);
        resp.json(null);
    }
    
})

app.get("/search", function(req, resp){

    console.log("Invoking /search/ GET request....");
       var param =  req.query.param;
       var array = new Array();
       if(param == null || param.trim() == ""){
        return resp.json(array);
       }
       else{
            for(var i=1; i < 8; i++){
                array.push(param + " 000" + i);
            }
            
            return resp.json(array);
       }
       
})

app.listen(port);

console.log('RESTful API server started on: ' + port);