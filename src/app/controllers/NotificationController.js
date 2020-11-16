const Notification = require('../models/Notification');

class NotificationController{

    async store (req, res){

        const {user_id, search_id, message, accepted, discard_id, provider_id} = req.body;
        
        const notification = await Notification.create(req.body);
        
        return res.status(201).json(notification);
    }

    async index (req, res) {
        const notification = await Notification.findAll();
        return res.json(notification);
    }

    async delete ( req, res ){
        
        const { notification_id } = req.params;

        const notification = await Notification.findByPk(notification_id);

        await notification.destroy();

        return res.status(204).json();
    }
}

module.exports = new NotificationController();