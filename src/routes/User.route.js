import express from 'express'
const userRoute = express.Router()
import userModel from '../models/user.mode.json' with {type:'json'}


userRoute.get('/',(req,res)=>{

    const response = {
        statusCode:200,
        statusMessage:"success",
        data: userModel
    }

    res.send(response)
})

userRoute.get('/',(req,res)=>{

    const { id } = req.query

    const fetchUser = userModel.filter(value => value.id === id)
    
    const response = {
        statusCode:200,
        statusMessage:"success",
        data: fetchUser
    }

    res.send(response)
})

userRoute.get('/:userId',(req,res)=>{

    const { userId } = req.params

    const fetchUser = userModel.filter(value => value.id === userId )
    
    const response = {
        statusCode:200,
        statusMessage:"success",
        data: fetchUser
    }

    res.send(response)
})

userRoute.post('/add-user',(req,res)=>{
    const user = req.body
    
    userModel.push(user)
    const response = {
        statusCode:201,
        statusMessage:"created",
        data: userModel
    }
        
    res.send(response)
    
        
})

userRoute.put('/modify-user',(req,res)=>{

    const { userId } = req.params
    const modifiedPayload = req.body
    
    const updatedUserList = userModel.map((user) => {
        if(userModel.id == userId)
            user = modifiedPayload

        return product
    }) 
    userModel = []    
    userModel = updatedUserList
    const response = {
        statusCode:201,
        statusMessage:"created",
        data: updatedProduct
    }

    res.send(response)
    
})
userRoute.delete('/remove-user/:userId',(req,res)=>{

    const {userId} = req.params
    const filteredUserList =  userModel.filter((value.id != produtId))
    userModel = []
    userModel = filteredUserList
   const response = {
        statusCode:200,
        statusMessage:"ok",
        data: userModel
    }

    res.send(response)
})


export default userRoute