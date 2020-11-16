const { Sequelize, DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('notifications', 'discard_id',{ 
        type: Sequelize.INTEGER,
        references: {model: 'discards', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: true,
    });
    return queryInterface.addColumn('notifications', 'provider_id',{ 
      type: Sequelize.INTEGER,
      references: {model: 'users', key: 'id'},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: true,
  });
    
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('notifications', 'discard_id');
    return queryInterface.removeColumn('notifications', 'provider_id');
  }
};
