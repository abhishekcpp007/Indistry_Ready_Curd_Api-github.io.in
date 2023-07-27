require('dotenv').config()
const express=require('express')
const connectToDb =require('./dbconfig/db')
//const {home}=require('./controlers/usercontroler')
const cors = require('cors')
const app = express()
connectToDb()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const userRoutes = require('./routes/user.routes')

app.use('/',userRoutes)


module.exports = app; 


