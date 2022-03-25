const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes')
const cors = require('cors')
const app = express()


const db = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'codigosusuarios'
}

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus:200
}

// middlewares

app.set('port', process.env.PORT || 9000)

app.use(myconn(mysql, db, 'single'))
app.use(cors(corsOptions))

// Routes

app.get('/', (req, res)=>{
    res.send("Welcome to my API")
})
app.use('/api', routes)

//Server running

app.listen(app.get('port'), "192.168.36.221" ,()=>{
    console.log("Server running on port ", app.get('port'))
})           
