import express from 'express'
import productRoute from './src/routes/product.route.js'
import userRoute from './src/routes/User.route.js'


const app = express()
app.use(express.json())



const PORT = 8080

/* Router Middleware */
app.use('/products',productRoute)

app.listen(PORT,()=>{
    console.log("Your server is ready",PORT)
})