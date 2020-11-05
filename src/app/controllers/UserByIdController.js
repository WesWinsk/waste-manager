const User = require ('../models/User');

//TEM QUE EDITAR

class SearchDiscardController {

    async index (req, res){

        const {id} = req.params;

        const search = await User.findAll({
                where: {
                id 
            }
        }
        )
        return res.json(search);
     
    }
}

module.exports = new SearchDiscardController();