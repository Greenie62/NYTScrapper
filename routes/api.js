const router=require('express').Router();
const Article=require("../models/article.js");


router.post('/sendData',(req,res)=>{
    console.log(req.body.topic);
    res.end()
});


module.exports=router;