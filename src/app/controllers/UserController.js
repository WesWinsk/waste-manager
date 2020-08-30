const User = require('../models/User');
//recebe requisição do front end, visita a model para realizar 
//a operação e devolve a resposta

class UserController{
    //controla validações
    async store(req, res){  
        //extraindo informações contidas no corpo da requisição
        const {name, password, email, company, type} = req.body;

        if(type != 'cliente' && type != 'fornecedor'){
            return res.status(401).json({error:'tipo informado inválido!'});
        }

        //cria registro no banco de dados

        const user = await User.create(req.body);

        //retorna ao cliente o registro criado
        return res.status(201).json(user);
    }

    async index(req , res){
        console.log('chegou')
        const user = await User.findAll();
        return res.json(user);
    }

    
}



module.exports = new UserController();