const Advantage = require('../models').Advantage;


exports.list_advantage = (req, res, next) => {
    Advantage.findAll({
        attributes: ['id', 'name'],
    })
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => console.log(err))
}

exports.add_advantage = (req, res, next) => {
    Advantage.create(req.body)
    .then(data => {
            res.status(201).json({message: 'Advantage created'});       
    })
    .catch(err => console.log(err))
}

exports.edit_advantage = (req, res, next) => {
    Advantage.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    .then(data => {
            res.status(201).json({message: 'Advantage updated'});       
    })
    .catch(err => console.log(err))
}
exports.delete_advantage = (req, res, next) => {
    Advantage.destroy({
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