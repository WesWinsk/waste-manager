const Sequelize = require('sequelize');

class Discard extends Sequelize.Model{
    static init(sequelize){
        super.init(
            {
                max_cap: Sequelize.DECIMAL(10,2),
                curr_quant: Sequelize.DECIMAL(10,2),
                description: Sequelize.TEXT,

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

module.exports = Discard;