const Material = require('../models/Materials');

class MaterialController{

    async store (req, res){

        const {name, state, price} = req.body;
        
        const material = await Material.create(req.body);
        
        return res.status(201).json(material);
    }

    async index (req, res) {
        const material = await Material.findAll();
        return res.json(material);
    }
}

module.exports = new MaterialController();