const Material = require('../models/Materials');

class ListMaterialsController{


    async index (req, res) {
        const material = await Material.findAll();

        const arrayMat = [];

        material.forEach(mat => {
            arrayMat.push( { value: mat.id , label: mat.name   } )
        })


        return res.json(arrayMat);
    }
}

module.exports = new ListMaterialsController();