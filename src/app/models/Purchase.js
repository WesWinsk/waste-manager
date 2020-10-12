const Sequelize = require('sequelize');

class Purchase extends Sequelize.Model{
    static init(sequelize){
        super.init(
            {
                completed: Sequelize.BOOLEAN,
                
                
            },
            {
                sequelize,
            }
        )
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider'});
        this.belongsTo(models.User, { foreignKey: 'customer_id', as: 'customer'});
    }
}

module.exports = Purchase;