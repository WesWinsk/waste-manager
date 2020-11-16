const Discard = require('../models/Discard');

class FindDiscardController{

    async index (req, res){
        const {material_id, type_id, curr_quant} = req.body;
        const {Op} = require ("sequelize"); 
        const response = await Discard.findAll({
            where : {
            material_id: material_id, 
            Type_id: type_id, 
            curr_quant:{
                [Op.gte]: curr_quant}              
            }
        
        })
    
        return res.status(200).json(response);
     
    }

    
}

module.exports = new FindDiscardController();