const Search = require ('../models/Search');
const Material = require ('../models/Materials');
const Type = require ('../models/Types');

class SearchesInfoController {

    async index (req, res){

        const {id} = req.params;

        const search = await Search.findAll({
                where: {
                id 
            }, 
            include: [Material, Type]
        
        
        }
        )
        return res.json(search);
     
    }
}

module.exports = new SearchesInfoController();