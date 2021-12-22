const express = require('express');
const router = express.Router();

const role_controller = require('../controllers/role.controller.js');


router.get('/', role_controller.list_role)
router.post('/', role_controller.add_role)
router.put('/:id', role_controller.edit_role)
router.delete('/:id', role_controller.delete_role)

module.exports = router;