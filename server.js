const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

const homeText = "Home";
const contactText="Contact Us";
const aboutText="About Us";
const composeText="Compose";

app.get("/compose",function(request,response){
  response.render("compose",{bodyTitle:composeText});
});

app.get("/about",function(request,response){
  response.render("about",{bodyTitle:aboutText});
});

app.get("/contact",function(request,response){
  response.render("contact",{bodyTitle:contactText});
});

app.get("/",function(request,response){
  response.render("blog",{bodyTitle:homeText});
});

app.listen(3000,function(){
  console.log("Blog server online at port 3000");
});
