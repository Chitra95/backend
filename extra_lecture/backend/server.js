import express from "express"
const app=express()

// app.get('/',(req,res)=>{
//     res.send("HELLO")
// })

//get a list of 5 jokes
//jokes are available on localhost:3000/jokes 
//take json data and go to json formatter 

//solution for CORS:
// 1.Standard practice- /api/v1/jokes or /api/jokes  "not just /jokes " here app.get('/jokes',(req,res)=>{})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'A joke',
            content:'This is funny'
        },
        {
            id:2,
            title:'A joke',
            content:'This is unbelieveable'
        },
        {
            id:3,
            title:'A joke',
            content:'This is comedy'
        }

    ] ;
    res.send(jokes)
})

const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server is listening on ${port}`)
})