const Notification = require('../models/Notification');

class NotificationController{

    async store (req, res){

        const {user_id, search_id, message, accepted} = req.body;
        
        const notification = await Notification.create(req.body);
        
        return res.status(201).json(notification);
    }

    async index (req, res) {
        const notification = await Notification.findAll();
        return res.json(notification);
    }
}

module.exports = new NotificationController();