const Sequelize = require('sequelize');

class Notification extends Sequelize.Model{
    static init(sequelize){
        super.init(
            {
                accepted: Sequelize.BOOLEAN,
                message: Sequelize.STRING,
                
            },
            {
                sequelize,
            }
        )
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id'});
        this.belongsTo(models.Search, { foreignKey: 'search_id'});
    }
}

module.exports = Notification;