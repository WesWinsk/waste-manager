//propriedades de conexão do banco de dados que será enviada ao sequelize
module.exports = {
    dialect: 'postgres',
    host: '192.168.99.100',
    port:'5432',
    username: 'postgres',
    password: '123456',
    database: 'wastemanager',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};