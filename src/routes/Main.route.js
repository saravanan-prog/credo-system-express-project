import express from 'express'
const mainRouter = express.Router()

mainRouter.get('/',(req,res)=>{
    res.send("Get method is working")
})

mainRouter.post('/',(req,res)=>{
    res.send("post method is working")
})

mainRouter.put('/',(req,res)=>{
    res.send("put method is working")
})
mainRouter.delete('/',(req,res)=>{
    res.send("delete method is working")
})


export default mainRouter