import express from 'express'
const productRoute = express.Router()
import productsList from '../models/product.model.js' with {type:'json'}



productRoute.get('/',(req,res)=>{

    const response = {
        statusCode:200,
        statusMessage:"success",
        data: productsList
    }

    res.send(response)
})

productRoute.get('/',(req,res)=>{

    const { id } = req.query

    const findProduct = productsList.filter(value => value.id === id)
    
    const response = {
        statusCode:200,
        statusMessage:"success",
        data: findProduct
    }

    res.send(response)
})

productRoute.get('/:produtId',(req,res)=>{

    const { produtId } = req.params

    const findProduct = productsList.filter(value => value.id === produtId )
    
    const response = {
        statusCode:200,
        statusMessage:"success",
        data: findProduct
    }

    res.send(response)
})

productRoute.post('/add-Products',(req,res)=>{
    const product = req.body
    
    productsList.push(product)
    const response = {
        statusCode:201,
        statusMessage:"created",
        data: findProduct
    }
        
    res.send(response)
    
        
})

productRoute.put('/modify-product',(req,res)=>{

    const {produtId} = req.params
    const modifiedPayload = req.body
    
    const updatedProduct = productsList.map((product) => {
        if(product.id == produtId)
            product = modifiedPayload

        return product
    }) 
    productsList = []    
    productsList = updatedProduct
    const response = {
        statusCode:201,
        statusMessage:"created",
        data: updatedProduct
    }

    res.send(response)
    
})
productRoute.delete('/remove-product/:id',(req,res)=>{

    const {produtId} = req.params
    const afterDeleteProductList =  productsList.filter((value.id != produtId))
    productsList = []
    productsList = afterDeleteProductList
   const response = {
        statusCode:200,
        statusMessage:"ok",
        data: deletedProduct
    }

    res.send(response)
})


export default productRoute