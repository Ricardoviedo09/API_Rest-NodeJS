const Sequelize = require('sequelize');

const usersModel = require('./models/users');

const sequelize = new Sequelize('gZvl0VCO5H','gZvl0VCO5H', 'JbU8r5RcYF', {
    host: 'remotemysql.com',
    dialect: 'mysql'
})

const User = usersModel(sequelize, Sequelize);

sequelize.sync({force: false})
.then(()=>{
    console.log('Tables Syncs')
})

module.exports = {
    User
}