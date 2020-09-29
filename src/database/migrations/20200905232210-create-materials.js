

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('materials',{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      price: {
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
    return queryInterface.dropTable('materials')
  }
};
