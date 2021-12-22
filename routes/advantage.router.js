const express = require('express');
const router = express.Router();

const advantage_controller = require('../controllers/advantage.controller.js');


router.get('/', advantage_controller.list_advantage)
router.post('/', advantage_controller.add_advantage)
router.put('/:id', advantage_controller.edit_advantage)
router.delete('/:id', advantage_controller.delete_advantage)

module.exports = router;