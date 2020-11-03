const Type = require('../models/Types');

class TypeController{

    async store (req, res){

        const {name} = req.body;
        
        const type = await Type.create(req.body);
        
        return res.status(201).json(type);
    }

    async index (req, res) {
        const type = await Type.findAll();
        return res.json(type);
    }
}

module.exports = new TypeController();