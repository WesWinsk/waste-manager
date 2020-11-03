const Discard = require ('../models/Discard');
const User = require ('../models/User');
const Material = require ('../models/Materials');


class DiscardUserController {

    async index (req, res){

        const {user_id} = req.params;

        const search = await Discard.findAll({
                where: {
                user_id 
            }, include: User,
            include: Material
        }
        )
        return res.json(search);
     
    }
}

module.exports = new DiscardUserController();