const path=require("path");
const express=require("express");
const app=express();

// app.get(route,callback)

// API:   CRUD
// get=>Read,
// post=>createImageBitmap,
// put=>Update,
// delete=>delete.


// bi=uilt-in middleware
// console.log("C:\Users\pravinya.k.in\Desktop\node\public\index.html");
const staticPath=path.join(__dirname,"../public");
// bi=uilt-in middleware
app.use(express.static(staticPath));


app.get("/",(req,res)=>{
    res.send("<h1>Hello from express .....</h1>");
});
app.get("/about",(req,res)=>{
    res.send("<h1>Hello from about page of express .....</h1>");
});
app.listen(8000,()=>{   
    console.log("Listening at post 8000");
});