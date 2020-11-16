const Notification = require ('../models/Notification');

class NotificationProviderAccController {

        async update(req, res){
                
            const { id } = req.params;

            const notification = await Notification.findByPk(id);

            notification.provider_accepted = true;

            await notification.save();

            return res.status(200).json(notification);
        }

}

module.exports = new NotificationProviderAccController();