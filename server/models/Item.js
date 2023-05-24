const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Item = sequelize.define("items", {
  title: Sequelize.STRING,
  price: Sequelize.INTEGER,
  image: Sequelize.STRING,
  category: Sequelize.STRING,
  description: Sequelize.STRING
});

module.exports = {
  db: sequelize,
  Item,
};