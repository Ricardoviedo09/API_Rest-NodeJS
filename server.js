const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const routes = require('./routes');
const cors = require('cors');
const app = express();

require('./db');

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus:200
}

// middlewares

app.set('port', process.env.PORT || 9000)

//app.use(myconn(mysql, db, 'single'))
app.use(cors(corsOptions))
app.use(express.json())

// Routes

app.get('/', (req, res)=>{
    res.send("Welcome to my API")
})
app.use('/api', routes)

//Server running

app.listen(app.get('port'), "192.168.36.221" ,()=>{
    console.log("Server running on port ", app.get('port'))
})           
