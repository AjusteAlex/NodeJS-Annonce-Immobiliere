const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const role = require('../middleware/role')
const user_controller = require('../controllers/user.controller.js');


router.get('/', user_controller.user_list)
router.post('/', user_controller.user_add)
// route avec authorisation qui fonctionne a moitié 
// router.post('/',auth(),role(), user_controller.user_add)
router.post('/login', user_controller.user_login)
router.put('/:id', user_controller.edit_user)
router.delete('/:id', user_controller.delete_user)

module.exports = router;