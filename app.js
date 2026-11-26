import express, { urlencoded } from 'express'
const app = express()
app.use(express.json())

import productRoute from './src/routes/Product.route.js'

const PORT = 8080

/* Router Middleware */
app.use('/products',productRoute)

app.listen(PORT,()=>{
    console.log("Your server is ready",PORT)
})