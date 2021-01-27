const express = require("express");
const app = express();
const path = require('path');
const hbs = require('hbs');
const port= process.env.PORT || 5000;
const staticPath = path.join(__dirname ,'../public'); 
const tempPath = path.join(__dirname,"../templates/views");
const part_path = path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',tempPath);
app.use(express.static(staticPath));
hbs.registerPartials(part_path);

app.get("/home",(req,res) => {
    res.render("index");
});

app.get("/about",(req,res) => {
    res.render("about");
});

app.get("/weather",(req,res) => {
    res.render("weather"); 
});

app.get("*",(req,res) => {
    res.render("404err");
});

app.listen(port,"127.0.0.1");