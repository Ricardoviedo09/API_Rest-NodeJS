module.exports = (sequelize, type) => {
    return sequelize.define('colaboradores',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuario: type.STRING,
        codigo: type.INTEGER
    })
}