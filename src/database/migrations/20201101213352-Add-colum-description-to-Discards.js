const { Sequelize, DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('discards', 'description',{ 
      type: DataTypes.TEXT,     
      allowNull: false,
      defaultValue: "descrição do estado do material",
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('discards', 'description');
  }
};
