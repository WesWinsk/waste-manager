const { response } = require('express');

const Discard = require('../models/Discard');
const Search = require('../models/Search');
const User = require ('../models/User');
const Material = require ('../models/Materials');
const Notification = require ('../models/Notification');


//recebe requisição do front end, visita a model para realizar 
//a operação e devolve a resposta

//TEM QUE REVISAR TAMBÉM
class MatchBySearchController{
    //controla validações
    async index(req , res){       
        const {Op} = require ("sequelize"); 
        const {material_id, type_id, curr_quant, searchId, idUser} = req.body;
        const response = await Discard.findAll({
            where : {
            material_id: material_id, 
            Type_id: type_id, 
            curr_quant:{
                [Op.gte]: curr_quant}              
            }, include: [User, Material]
        
        })
            console.log(response.data);
            console.log(idUser);
            if(response.data == null){
                console.log('morreu aqui');
                return res.status(200).json(response);
                
            }
            
            const search = await Search.findByPk(searchId);

            search.was_find = true;

            await search.save();

            
        
            await Notification.create(
                {
                    user_id: idUser, 
                    search_id: searchId,
                    message: "this is a message",
                    accepted: false        
                }, );
                console.log('veio aqui');
            return res.status(200).json(response);
            
    }
}
module.exports = new MatchBySearchController();