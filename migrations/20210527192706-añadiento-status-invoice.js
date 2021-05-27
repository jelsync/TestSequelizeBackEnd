'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'invoices',
      'completed',
     Sequelize.BOOLEAN
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'invoices',
      'completed',
    );
  }
};
