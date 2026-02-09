const express=require('express')
const app=express()

app.use('/website',(req,res,next)=>{
    let otp=Math.ceil(Math.random()*99999999999)
    res.json({message:'Hello World', 
        Result:otp, Status:'Okay', Meta:'Null'})
    })
module.exports=app
