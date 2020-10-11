const Purchase = require('../models/Purchase');

class PurchaseController{

    async store (req, res){

        const {provider_id, customer_id, completed} = req.body;
        console.log(req.body);
        
        const purchase = await Purchase.create(req.body);
        
        return res.status(201).json(purchase);
    }

    async index (req, res) {
        const purchase = await Purchase.findAll();
        return res.json(purchase);
    }
}

module.exports = new PurchaseController();