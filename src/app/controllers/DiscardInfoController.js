const Discard = require ('../models/Discard');
const Material = require ('../models/Materials');
const Type = require ('../models/Types');

class DiscardInfoController {

    async index (req, res){

        const {id} = req.params;

        const search = await Discard.findAll({
                where: {
                id 
            }, 
            include: [Material, Type]
        
        
        }
        )
        return res.json(search);
     
    }
}

module.exports = new DiscardInfoController();