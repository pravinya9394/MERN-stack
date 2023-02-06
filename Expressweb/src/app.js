const express=require("express");
const app=express();
const port=process.env.PORT||8000;

// HOME PAGE
app.get("/",(req,res)=>{
    res.send("Welcome to Home page");
});

// ABPUT PAGE
app.get("/about",(req,res)=>{
    res.send("Welcome to About page");
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

