const Sequelize = require('sequelize');

const sequelize = new Sequelize('user-table', 'root', '4444', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;