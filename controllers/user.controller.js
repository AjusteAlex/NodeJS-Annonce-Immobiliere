const User =require('../models').User;
const Role =require('../models').Role;
const UserRole =require('../models').UserRole;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize')

const passwordService = require('../services/password.service')


exports.user_list = (req, res, next) => {
    User.findAll({
        attributes: ['id', 'name', 'age', 'email', 'tel'],
        // include: [{
        //     model: UserRole,
        //     attributes: [
        //         "RoleId"
        //     ],
            include: [{
                model: Role
            }]
        // }]
    })
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => console.log(err))
}

exports.user_add = (req, res, next) => {
    passwordService.verifyPassword(req.body.password)
    .then( result => {
        if(result){
            let user = req.body;
            user.password = result;
            User.create(user)
            .then( userCreated => {
                userCreated.setRoles(req.body.Roles)
                .then(() =>{
                    res.status(201).json({message: 'Utilisateur créé'})
                })
                .catch(err => console.log(err))
            })
            .catch(err => res.status(400).json(err))
        }else{
            res.status(400).json({message : 'Erreur'})
        }
    })
    .catch(err => console.log(err))
    
    
}   

exports.user_login = (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email,
        },
        include: [{
            model: UserRole,
            attributes: [
                "RoleId"
            ],
            include: [{
                model: Role
            }]
        }]
    })
    .then(user => {
        const roles = user.UserRoles.map(role=> role.Role.name)
        if(user){
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if(err){
                    res.status(500).end()
                }
                else if(result){
                    const token = jwt.sign({name: user.name, email: user.email, role: JSON.stringify(roles) }, process.env.SECRET, { expiresIn:'1h'});
                    res.status(200).json({token: token});
                }
                else {
                    res.status(404).json({message: 'bad login/password'})
                }
            })
        }
    })
    .catch(err => console.log(err))
}

exports.edit_user = (req, res, next) => {
    passwordService.verifyPassword(req.body.password)
    .then( result => {
        if(result){
            let user = req.body;
            user.password = result;
            User.update(user,{
                where:{
                    id: req.params.id
                }
            })
            .then(() => {
                UserRole.update(req.body,{
                    where:{
                        id: req.params.id
                    }
                })
                .then(() =>{
                    res.status(201).json({message: 'utilisateur modifié'})
                })
                .catch(err => console.log(err))
            })
        }
    })
    .catch(err => console.log(err))
}

exports.delete_user = (req, res, next) => {
    User.destroy({
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