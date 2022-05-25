const express = require('express')
const routes = express.Router()
const {User} = require('./db')

//Get all code data.
routes.get('/', async (req, res)=>{
    try{
        const employees = await User.findAll();
        res.json(employees);
    }catch (err){
        res.json({'Message': 'No data found'})
    }    
})

//Register users by getting the username from the form and generating the code randomly.
routes.post('/create', async (req, res)=>{
    try{
        let {username} = req.body;
        var code = Math.floor(1000 + Math.random() * 9000);
        let employee = {
            "usuario": username,
            "codigo": code
        }

        const validateCode = await User.findByPk(code,{
            where:{
                codigo: code
            }
        });

        if(validateCode){
            res.json({"Error": "Esta creado"});
        }else{
            User.create(employee);
            res.redirect('http://192.168.36.221:91/');
        }
    }catch{
        res.json({'Message': 'No data found'})
    }
})
//Update username and code records.
routes.put('/:id', async (req, res)=>{
    try{
        await User.update(req.body, {
            where: { id: req.params.id}
        });
        res.json({'Message': 'Employee Update Successfully'});
    }catch{
        res.json({'Message': 'No data found'})
    }
})
//Delete records.
routes.delete('/:id', async (req, res)=>{
    try{
        await User.destroy({
            where: { id: req.params.id}
        });
        res.json({'Message': 'Employee deleted Successfully'});
    }catch{
        res.json({'Message': 'No data found'})
    }
})
module.exports = routes