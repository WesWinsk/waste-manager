const Notification = require ('../models/Notification');
const Search = require ('../models/Search');
const User = require ('../models/User');
const Material = require ('../models/Materials');
const Type = require('../models/Types');
const Discard = require('../models/Discard');
//TEM QUE EDITAR

class NotificationByClientIdController {

    async index (req, res){

        const {id} = req.params;

        const notification = await Notification.findAll({
                where: {
                user_id: id
            }, include: [ User, Search, {
                model: Discard,
                as: 'Discard',
                include: 
                [User, Material, Type],
            }]
            
        }
        )
        return res.json(notification);
     
    }
}

module.exports = new NotificationByClientIdController();