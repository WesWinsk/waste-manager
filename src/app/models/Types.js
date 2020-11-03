const Sequelize = require('sequelize');

class Types extends Sequelize.Model{
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                
            },
            {
                sequelize,
            }
        );
    }
}

module.exports = Types;