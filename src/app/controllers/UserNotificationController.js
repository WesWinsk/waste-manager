const { search } = require('../../routes');
const Notification = require ('../models/Notification');
const Search = require ('../models/Search');
const User = require ('../models/User');
const Material = require ('../models/Materials');


//TEM QUE EDITAR

class UserNotificationController{

    async index (req, res){

        const {user_id} = req.params;

        const notifications = await Notification.findAll({
                where: {
                user_id 
            }, include: {
                model: Search,
                as: 'Search',
                include: 
                [User, Material]
            }
            }     
        )
        return res.json(notifications);
     
    }
}

module.exports = new UserNotificationController();