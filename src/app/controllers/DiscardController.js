const Discard = require ('../models/Discard');

class DiscardController {
    async store ( req , res ){

        const { user_id, material_id,max_cap, curr_quant } = req.body;

        const discard = await Discard.create(req.body);

        return res.status(201).json(discard);
    }

    async index (req, res){
        const discard = await Discard.findAll();
        return res.json(discard);
    }
}

module.exports = new DiscardController();