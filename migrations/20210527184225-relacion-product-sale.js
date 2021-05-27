'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([

        queryInterface.addColumn('Sales', 'ProductId', {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Products',
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
				queryInterface.removeColumn('Sales', 'ProductId', { transaction: t }),
			])
		})
  }
};
