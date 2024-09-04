const express = require('express');
const router = express.Router();
const {Student} = require('../models/student');

router.post('/',(req,res)=>{
    const nameof = req.body.name;
    const classof = req.body.class;
    const ageof = req.body.age;
    const stud = new Student({name:nameof,class:classof,age:ageof});
    stud.save().then(()=>res.send("student saved")).catch((err)=>console.log(err));
});
module.exports = router;