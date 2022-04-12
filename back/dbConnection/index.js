const Sequelize = require("sequelize");
const { USER, PASSWORD, NAME } = require('../config').database

const sequelize = new Sequelize(NAME, USER, PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
  });

module.exports = sequelize