'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Invoice.hasMany(models.Sale);        
      Invoice.belongsTo(models.Client);        
    }
  };
  Invoice.init({
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};