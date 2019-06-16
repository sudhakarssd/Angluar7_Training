const express = require('express');
const hbs = require('hbs');
const axios = require('axios');

var app = express();

hbs.registerPartials(__dirname + "/views/partials");
// hbs.registerHelper("getCurrentYear", () => {
//     return new Date().getFullYear();
// });
// hbs.registerHelper("toUpper", (text) => {
//     return text.toUpperCase();
// })

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

// app.use(function(req, resp, next){
//     console.log("Testing middleware");
//     next();
// })

app.get("/", (req, resp) => {

    // resp.writeHead(200, {'Content-Type': 'text/html'});
    // resp.write("<h2>Hello Express Application </h2>");
    // resp.end();

    resp.render('home', {
        message: "This the home page"
    });
});

app.get("/about", (req, resp) => {

    setTimeout(() => {

        resp.render('about', {
            message: "Created for training purpose..."
        });

    }, 1000);

    
})
app.get("/blogs", async (req, resp)=>{

    var url = "https://jsonplaceholder.typicode.com/posts";
    
    var blogsData = []
    try {
        var response = await axios.get(url);
        blogsData = response.data
    } catch (error) {
        
    }
    resp.render("blogs", {
        blogs: blogsData
    });
})

app.listen(8080, () => {
    console.log("Express server started...");
});