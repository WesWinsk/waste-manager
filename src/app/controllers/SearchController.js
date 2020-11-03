const Search = require ('../models/Search');

class SearchController {
    async store ( req , res ){

        const { user_id, material_id, quantity, was_find  } = req.body;

        const search = await Search.create(req.body);
        
        return res.status(201).json(search);
    }

    async index (req, res){
        const search = await Search.findAll();
        return res.json(search);
    }

    async delete ( req, res ){
        
        const { search_id } = req.params;

        const search = await Search.findByPk(search_id);

        await search.destroy();

        return res.status(204).json();
    }
}

module.exports = new SearchController();