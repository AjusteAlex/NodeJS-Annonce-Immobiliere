const Advertisement = require('../models').Advertisement;
const Property = require('../models').Property;
const Keyword = require('../models').Keyword;
const Advantage = require('../models').Advantage;
const User = require('../models').User;


exports.list_advertisement = (req, res, next) => {
    Advertisement.findAll({
        attributes: ['id', 'title','price','sector','nbpieces','description', 'picture'],
        include: [
            {
                model: Property,
                attributes: ['id', 'name'],
            },
            {
                model: Keyword,
                attributes: ['id', 'name'],
            },
            {
                model: Advantage,
                attributes: ['id', 'name'],
            },
            {
                model: User,
                attributes: ['id', 'name'],
            }
        ],
    })
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => console.log(err))
}

exports.detail_advertisement = (req, res, next) => {
    Advertisement.findAll({
        attributes: ['id', 'title', 'price', 'sector','nbpieces', 'description'],
        include: [
            {
                model: Property,
                attributes: ['id', 'name'],
            },
            {
                model: Keyword,
                attributes: ['id', 'name'],
            },
            {
                model: Advantage,
                attributes: ['id', 'name'],
            },
            {
                model: User,
                attributes: ['id', 'name'],
            }
        ],
    })
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => console.log(err))
}

exports.add_advertisement = (req, res, next) => {
    Property.findByPk(req.body.PropertyId)
    .then(data => {
        if(data){
            if(req.file){
                req.body.picture = `public/upload/advertisement/${req.file.filename}`
        
                Advertisement.create(req.body)
                .then(advertisement => {
                    advertisement.setKeywords(req.body.Keywords)
                    .then(() => {
                        advertisement.setAdvantages(req.body.Advantages)
                        .then(() => {
                            res.status(201).json({message: 'Annonce créé'});     
                        })
                    }) 
                    .catch(err => console.log(err))
                })
                .catch(err => res.status(500).end())
            }else{
                Advertisement.create(req.body)
                .then(advertisement => {
                    advertisement.setKeywords(req.body.Keywords)
                    .then(() => {
                        advertisement.setAdvantages(req.body.Advantages)
                        .then(() => {
                            res.status(201).json({message: 'Annonce créé'});     
                        })
                    }) 
                    .catch(err => console.log(err))
                })
                .catch(err => res.status(500).end())
            }
        
        } else{
            console.log(req.body)
            res.status(404).json({message: 'Donnée(s) entré non valide'})
        }
    })
    .catch(err => res.status(500).json(err))
}

exports.edit_advertisement = (req, res, next) => {
    Advertisement.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    .then(data => {
            res.status(201).json({message: 'Advertisement updated'});       
    })
    .catch(err => console.log(err))
}
exports.delete_advertisement = (req, res, next) => {
    Advertisement.destroy({
        where:{
            id: req.params.id
        }
    })
    .then((data) => {
        if(data == 0){
            res.status(200).json({message: 'No data to delete'})
        }
        res.status(204).end();
    })
    .catch(err => console.log(err))
}