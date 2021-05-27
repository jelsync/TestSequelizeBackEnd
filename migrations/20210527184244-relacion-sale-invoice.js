'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([

        queryInterface.addColumn('Sales', 'InvoiceId', {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Invoices',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }, {
          transaction: t
        }),
      ])
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
			return Promise.all([
				queryInterface.removeColumn('Sales', 'InvoiceId', { transaction: t }),
			])
		})
  }
};
