const { Sequelize, DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('discards', 'price',{ 
      type: Sequelize.DECIMAL(10,2),
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('discards', 'price');
  }
};
