const Sequelize = require('sequelize');

class Search extends Sequelize.Model{
    static init(sequelize){
        super.init(
            {
                quantity: Sequelize.DECIMAL(10,2),
                
            },
            {
                sequelize,
            }
        )
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id'});
        this.belongsTo(models.Materials, { foreignKey: 'material_id'});
    }
}

module.exports = Search;