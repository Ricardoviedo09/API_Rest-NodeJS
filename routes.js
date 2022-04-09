const express = require('express')
const routes = express.Router()
const {User} = require('./db')

//GET
routes.get('/', async (req, res)=>{
    try{
        const employees = await User.findAll();
        res.json(employees);
    }catch (err){
        res.json({'Message': 'No data found'})
    }    
})

//POST
routes.post('/', async (req, res)=>{
    try{
        const employee = await User.create(req.body);
        res.json(employee);
    }catch{
        res.json({'Message': 'No data found'})
    }
})
//PUT
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
//DEL
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