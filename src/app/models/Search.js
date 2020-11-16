const Sequelize = require('sequelize');

class Search extends Sequelize.Model{
    static init(sequelize){
        super.init(
            {
                quantity: Sequelize.DECIMAL(10,2),
                was_find: Sequelize.BOOLEAN
                
            },
            {
                sequelize,
            }
        )
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id'});
        this.belongsTo(models.Materials, { foreignKey: 'material_id'});
        this.belongsTo(models.Types, {foreignKey: 'Type_id'});

    }
}

module.exports = Search;