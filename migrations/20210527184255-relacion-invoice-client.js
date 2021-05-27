'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([

        queryInterface.addColumn('Invoices', 'ClientId', {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Clients',
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
				queryInterface.removeColumn('Invoices', 'ClientId', { transaction: t }),
			])
		})
  }
};
