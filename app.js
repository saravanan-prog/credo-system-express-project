import express from 'express'
const app = express()

const PORT = 8080

app.get('/',(req,res)=>{
    res.send("Express Route reached")
})

app.listen(PORT,()=>{
    console.log("Your server is ready",PORT)
})