const sequlize=require('../ROOTPATH/database')

const Sequelize=require('sequelize');

const Product=sequlize.define('Product',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      item: {
        type: Sequelize.STRING,
        allowNull: false
      },
      size:{
        type: Sequelize.INTEGER,
        allowNull: false
      }
})
module.exports=Product;