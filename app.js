import express from 'express'
const app = express()
import mainRouter from './src/routes/Main.route.js'

const PORT = 8080

/* Router Middleware */
app.use('/',mainRouter)

app.listen(PORT,()=>{
    console.log("Your server is ready",PORT)
})