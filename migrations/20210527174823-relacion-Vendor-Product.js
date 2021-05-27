'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([

        queryInterface.addColumn('Products', 'VendorId', {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Vendors',
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
				queryInterface.removeColumn('Products', 'VendorId', { transaction: t }),
			])
		})
  }
};
