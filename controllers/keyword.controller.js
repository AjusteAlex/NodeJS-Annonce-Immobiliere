const Keyword = require('../models').Keyword;


exports.list_keyword = (req, res, next) => {
    Keyword.findAll({
        attributes: ['id', 'name'],
    })
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => console.log(err))
}

exports.add_keyword = (req, res, next) => {
    Keyword.create(req.body)
    .then(data => {
            res.status(201).json({message: 'Keyword created'});       
    })
    .catch(err => console.log(err))
}

exports.edit_keyword = (req, res, next) => {
    Keyword.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    .then(data => {
            res.status(201).json({message: 'Keyword updated'});       
    })
    .catch(err => console.log(err))
}
exports.delete_keyword = (req, res, next) => {
    Keyword.destroy({
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