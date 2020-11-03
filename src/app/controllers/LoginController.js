const { response } = require('express');
const User = require('../models/User');
//recebe requisição do front end, visita a model para realizar 
//a operação e devolve a resposta



//TEM QUE REVISAR TAMBÉM
class LoginController{
    //controla validações
    

    index(req , res){
        const { email, password_hash } = req.body;

 
        User.findOne({where:{ email, password_hash }})
        .then(response =>{
            if(response==null){
                return res.status(404).json(response);
            }
            return res.status(200).json(response);

        }).catch(error=>{
            return res.status(500).json(error);
        });
 //       return res.json(user);
    }

    
}



module.exports = new LoginController();