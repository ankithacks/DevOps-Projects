const express=require('express')
const app=express()

const port=8080

app.get('/', (req,res)=>{
    res.send("service is up and running!!")
})

app.listen(port, ()=>{
    console.log(`server strted on port ${port}`)
})