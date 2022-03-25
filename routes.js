const express = require('express')
const routes = express.Router()

//GET
routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM colaboradores', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})


module.exports = routes