const Role =require('../models').Role;

exports.list_role = (req, res, next) => {
    Role.findAll({
        attributes: ['id', 'name'],
    })
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => console.log(err))
}

exports.add_role = (req, res, next) => {
    Role.create(req.body)
    .then(data => {
            res.status(201).json({message: 'Role created'});       
    })
    .catch(err => console.log(err))
}

exports.edit_role = (req, res, next) => {
    Role.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    .then(data => {
            res.status(201).json({message: 'Role updated'});       
    })
    .catch(err => console.log(err))
}
exports.delete_role = (req, res, next) => {
    Role.destroy({
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