const Sequelize = require('sequelize');

class Materials extends Sequelize.Model{
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                state: Sequelize.STRING,
                price: Sequelize.DECIMAL(10,2),
            },
            {
                sequelize,
            }
        );
    }
}

module.exports = Materials;