require('dotenv').config()

console.log("HEYYYYYY")

const express = require('express')
// import express from "express";
const app = express()
const port = process.env.PORT || 4000
//pc has many ports eg 65kports some ports are free
//our server listens on that port

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter",(req,res)=>{
    res.send("chitra95")
})

app.get("/login",(req,res)=>{
    res.send("<h1>Please login </h1>")
})

app.get("/youtube",(req,res)=>{
    res.send("<h2>CHAI AUR CODE</h2>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})