const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>hello from the home page...</h1>");
});
app.get("/about",(req,res)=>{
    res.status(200).send("<h1>hello from the about page...</h1>");
});
app.get("/contact",(req,res)=>{
    res.status(200).send("<h1>hello from the contact page...</h1>");
});
app.get("/temp",(req,res)=>{
    res.status(200).send("<h1>hello from the temp page...</h1>");
});
 

app.listen(8080,()=>{
    console.log("Listening at posrt 8080...");
});