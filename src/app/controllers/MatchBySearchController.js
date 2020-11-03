const { response } = require('express');

const Discard = require('../models/Discard');
const Search = require('../models/Search');


//recebe requisição do front end, visita a model para realizar 
//a operação e devolve a resposta

//TEM QUE REVISAR TAMBÉM
class MatchBySearchController{
    //controla validações
    async index(req , res){       
        const {Op} = require ("sequelize"); 
        const {material_id, type_id, quantity} = req.body;
        await Discard.findAll({
            where : {
            material_id: material_id, 
            Type_id: type_id, 
            curr_quant:{
                [Op.gte]: quantity}              
            }})
        .then(response =>{
            if(response==null){
                return res.status(404).json(response);
            }
            return res.status(200).json(response);
        }).catch(error=>{
            return res.status(500).json(error);
        });
    }
}
module.exports = new MatchBySearchController();