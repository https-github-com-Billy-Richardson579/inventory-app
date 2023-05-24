const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Item = sequelize.define("sauces", {
  title: Sequelize.STRING,
  price: Sequelize.STRING,
  image: Sequelize.STRING,
  category: Sequelize.STRING,
  description: Sequelize.STRING


});

module.exports = {
  db: sequelize,
  Item,
};