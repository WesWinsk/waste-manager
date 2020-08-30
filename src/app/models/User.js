const Sequelize = require('sequelize');

class User extends Sequelize.Model{
    static init(sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
                email: Sequelize.STRING,
                company: Sequelize.STRING,
                type: Sequelize.STRING,

            },
            {
                sequelize,
            }
        );
    }
}

module.exports = User;