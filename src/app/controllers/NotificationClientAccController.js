const Notification = require ('../models/Notification');

class NotificationClientAccController {

        async update(req, res){
                
            const { id } = req.params;
            
            const notification = await Notification.findByPk(id);


            notification.accepted = true;


            await notification.save();

            return res.status(200).json(notification);
        }

}

module.exports = new NotificationClientAccController();