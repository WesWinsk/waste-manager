const { response } = require('express');

const Discard = require('../models/Discard');
const Search = require('../models/Search');
const User = require ('../models/User');
const Material = require ('../models/Materials');
const Type = require('../models/Types');
const Notification = require ('../models/Notification');


//recebe requisição do front end, visita a model para realizar 
//a operação e devolve a resposta

//TEM QUE REVISAR TAMBÉM
class FinalMatchController{
    //controla validações
    async index(req , res){       
        const {Op} = require ("sequelize"); 
        const {material_id, type_id, curr_quant} = req.body;
        const response = await Discard.findAll({
            where : {
            material_id: material_id, 
            Type_id: type_id, 
            curr_quant:{
                [Op.gte]: curr_quant}              
            }, include: [User, Material, Type]
        
        })
            console.log(response.data);

            return res.status(200).json(response);
            
    }
}
module.exports = new FinalMatchController();