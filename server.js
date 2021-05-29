  
require('dotenv').config()

const express = require('express')
var session = require('express-session')
const app = express()
const mongoose = require('mongoose')

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))
const db = mongoose.connection
db.on('error', (error) => console.error(error))


app.use(express.json())



app.use('/register', require('./routes/register'))
app.use('/login', require(('./routes/login')))
app.use('/forum', require(('./routes/forum')))
app.use('/dashboarddata', require(('./routes/dashboardata')))



app.listen(4000, () => console.log('Server Started'))
