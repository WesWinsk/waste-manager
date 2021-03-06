const Search = require ('../models/Search');
const Material = require ('../models/Materials');
const Type = require('../models/Types');


class MaterialSearchController {

    async index (req, res){

        const {user_id} = req.params;

        const search = await Search.findAll({
                where: {
                user_id 
            }, include: [Material, Type]
        
        
        }
        )
        return res.json(search);
     
    }
}

module.exports = new MaterialSearchController();