

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('notifications',{
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
      search_id: {
        type: Sequelize.INTEGER,
        references: {model: 'searches', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      message:{
        type: Sequelize.STRING,
        allowNull: false,
        
      },
      accepted:{
        type: Sequelize.BOOLEAN,
        allowNull: true,
        
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
    return queryInterface.dropTable('searches');
  }
};
