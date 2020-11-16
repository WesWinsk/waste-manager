const Discard = require('../models/Discard');
const Materials = require('../models/Materials');
const Notification = require ('../models/Notification');
const Search = require('../models/Search');
const Types = require('../models/Types');
const User = require('../models/User');

//TEM QUE EDITAR

class NotificationByProviderIdController {

    async index (req, res){

        const {id} = req.params;

        const notification = await Notification.findAll({
                where: {
                provider_id: id 
            }, include: 
            [{model: Discard,
            as: 'Discard',
            include: 
            [User , Materials, Types],},
            {
                model: Search,
                as: 'Search',
                include: 
                [Materials, Types, User],
            }
            ]
        }
        )
        return res.json(notification);
     
    }
}

module.exports = new NotificationByProviderIdController();