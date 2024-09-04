const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/newSchool");

const express = require('express');
const app = express();

const save = require('./Routes/save');
const adminpage = require('./Routes/adminpage');
const getstudents = require("./Routes/getstudent");

const ejs = require('ejs');

app.set("view engine", "ejs");

app.set("views", "./views");

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render("index");
});
app.use('/save',save);
app.use('/adminpage',adminpage);
app.use("/getstudents",getstudents);

const port = 3000;
app.listen(port,console.log("server started"));