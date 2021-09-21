
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

const blogList =[];
const fullText=[];
var blogCount=blogList.length;

app.get("/",function(request,response){
  response.render("blog",{bodyTitle:homeText,blogs:blogList});
});

app.post("/",function(request,response){
  const blogTitle = request.body.blogTitle;
  const blogText = request.body.blogText;

  function trimText(text){
    if(text.length>100){
      return text.substring(0,101) + "...";
    }else{
      return text;
    }
  }
  function createBlog(title,blog){
    this.title=title,
    this.subBlog=trimText(blog)
    this.fullText=blog;
  }
  const Blog = new createBlog(blogTitle,blogText);
  blogList.push(Blog);
  console.log(blogList);

  response.redirect("/");
});

app.get("/compose",function(request,response){
  response.render("compose",{bodyTitle:composeText});
});


app.listen(3000,function(){
  console.log("Blog server online at port 3000");
});
