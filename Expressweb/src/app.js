const express=require("express");
const path=require("path");
const app=express();
const hbs=require("hbs");
const port=process.env.PORT||8000;

const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials")
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partial_path);

app.use(express.static(static_path));
// HOME PAGE

app.get("/",(req,res)=>{
    res.render("index");
});

// ABPUT PAGE
app.get("/about",(req,res)=>{
    res.render("about");
});

// WEATHER PAGE
app.get("/weather",(req,res)=>{
    res.send("Welcome to Weather page");
});

// 404 error page
app.get("*",(req,res)=>{
    res.send("404 ERROR,Oop's Page not found...");
});


app.listen(8000,()=>{
    console.log(`Running on port ${port}`)
});