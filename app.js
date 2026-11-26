import express from 'express'
import dotenv from 'dotenv'
import productRoute from './src/routes/product.route.js'
import userRoute from './src/routes/User.route.js'


const app = express()
app.use(express.json())
dotenv.config()


const PORT = process.env.PORT   /* Read from enviroment variables */

/* Router Middleware */
app.use('/products',productRoute)

app.listen(PORT,()=>{
    console.log("Your server is ready",PORT)
})