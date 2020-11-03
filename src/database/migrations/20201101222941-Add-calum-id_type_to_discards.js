const { Sequelize, DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('discards', 'type_id',{ 
      type: DataTypes.INTEGER,     
      references: {model : 'types', key: 'id'}, 
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',    
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('discards', 'type_id');
  }
};
