const jwt = require('jsonwebtoken');

module.exports = () => {
    return (req, res, next) => {
        if(res.locals.user.role == 'admin'){
            next()
        }else{
            res.status(400).json({message: 'tu n\'a pas le droit d\'être la'})
        }
    }
}