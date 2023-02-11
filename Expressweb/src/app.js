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

// ABOUT PAGE
app.get("/about",(req,res)=>{
    res.render("about");
});

// WEATHER PAGE
app.get("/weather",(req,res)=>{
    res.render("weather");
});

// 404 error page
app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg:"Oop's page not found..."
    });
});
// Contact us page

app.listen(8000,()=>{
    console.log(`Running on port ${port}`)
});