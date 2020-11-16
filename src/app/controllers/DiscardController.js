const Discard = require ('../models/Discard');
const Search = require('../models/Search');
const User = require('../models/User');
const Material = require('../models/Materials');
const Type = require('../models/Types');
const {Op} = require ("sequelize"); 

class DiscardController {
    async store ( req , res ){

        
        const { user_id, material_id, max_cap, curr_quant, description , Type_id, price } = req.body;

        const discard = await Discard.create(req.body);

        const response = await Search.findAll({
            where : {
            material_id: material_id, 
            Type_id: Type_id, 
            quantity:{
                [Op.lte]: curr_quant}              
            }, include: [User, Material, Type]
        
        })


        if (response.lenght>0){
            response.map(
                async (search) => {
                    const notificationClient = {
                    user_id: search.data.user_id, 
                    search_id: search.id, 
                    message: "defaut", 
                    accepted: false , 
                    discard_id:discard.id,
                    provider_id: user_id,
                    provider_accepted: false
                }
                const notification = await Notification.create(notificationClient);
                console.log (notification);
                } 
            )
            
        }

        return res.status(201).json(discard);
    }

    async index (req, res){
        const discard = await Discard.findAll();
        return res.json(discard);
    }

   
    async delete ( req, res ){
        
        const { discard_id } = req.params;

        const discard = await Discard.findByPk(discard_id);

        await discard.destroy();

        return res.status(204).json();
    }
}

module.exports = new DiscardController();