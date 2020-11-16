const Types = require('../models/Types');

class ListTypesController{


    async index (req, res) {
        const material = await Types.findAll();

        const arrayMat = [];

        material.forEach(typ => {
            arrayMat.push( { value: typ.id , label: typ.name   } )
        })


        return res.json(arrayMat);
    }
}

module.exports = new ListTypesController