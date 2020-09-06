const User = require("../../app/models/User");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('discards',{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      material_id: {
        type: Sequelize.INTEGER,
        references: {model: 'materials', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      max_cap: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      curr_quant: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('discards');
  }
};
