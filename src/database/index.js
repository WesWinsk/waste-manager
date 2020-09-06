const Sequelize = require( 'sequelize');
const databaseConfig = require( '../config/database');
const User = require('../app/models/User');  //importa o model de usuário
const Materials = require('../app/models/Materials');
const Discard = require('../app/models/Discard');

const models = [User, Materials, Discard ];
// classe que inicia a conexão de cada tabela com o banco de dados
class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
        // verifica relacionamentos e executa as associações

        models.map(
            model => model.associate && model.associate(this.connection.models)
        );
    }
}

module.exports = new Database();