const Sequelize = require('sequelize');

class Notification extends Sequelize.Model{
    static init(sequelize){
        super.init(
            {
                accepted: Sequelize.BOOLEAN,
                message: Sequelize.STRING,
                provider_accepted: Sequelize.BOOLEAN,
                
            },
            {
                sequelize,
            }
        )
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id'});
        this.belongsTo(models.Search, { foreignKey: 'search_id'});
        this.belongsTo(models.Discard, {foreignKey: 'discard_id'});
        this.belongsTo(models.User, { foreignKey: 'provider_id', as: 'provider'});
    }
}

module.exports = Notification;