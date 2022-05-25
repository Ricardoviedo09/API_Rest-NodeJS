const Sequelize = require('sequelize');

const usersModel = require('./models/users');

const sequelize = new Sequelize('****','****', '****', {
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
