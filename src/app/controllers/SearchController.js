const Search = require ('../models/Search');
const Material = require('../models/Materials');
const Type = require('../models/Types');
const Notification = require ('../models/Notification');
const Discard = require('../models/Discard');
const User= require('../models/User');


class SearchController {
    async store ( req , res ){
    
        const {Op} = require ("sequelize"); 
        const { user_id, material_id, quantity, was_find, Type_id  } = req.body;

        const search = await Search.create(req.body);

        const response = await Discard.findAll({
            where : {
            material_id: material_id, 
            Type_id, 
            curr_quant:{
                [Op.gte]: quantity}              
            }, include: [User, Material, Type]
        
        })
        
        if (response.length>0){
            console.log('cheguei aqui desgraça')
            response.map(
                async (discard) => {
                    const notificationClient = {
                    user_id, 
                    search_id: search.id, 
                    message: "defaut", 
                    accepted: false , 
                    discard_id:discard.id,
                    provider_id: discard.user_id,
                    provider_accepted: false
                }
                const notification = await Notification.create(notificationClient);
                console.log (notification);
                } 
            )
            
        }
        
        return res.status(201).json(search);
    }

    async index (req, res){
        const search = await Search.findAll({ include: [Material, Type]});
        return res.json(search);
    }

    async delete ( req, res ){
        
        const { search_id } = req.params;

        const search = await Search.findByPk(search_id);

        await search.destroy();

        return res.status(204).json();
    }

    async put (req, res){
        
        const { search_id } = req.params;

        const search = await Search.findByPk(search_id);

        search.was_find = true;

        await search.save();

        return res.status(201).json(search);
    }

    
}

module.exports = new SearchController();