const Search = require ('../models/Search');
const Material = require ('../models/Materials');
const User = require('../models/User')


class MaterialSearchController {

    async index (req, res){

        const {user_id} = req.params;

        const search = await Search.findAll({
                where: {
                user_id 
            }, include: Material
        
        
        }
        )
        return res.json(search);
     
    }
}

module.exports = new MaterialSearchController();