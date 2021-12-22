const express = require('express');
const router = express.Router();

const property_controller = require('../controllers/property.controller.js');


router.get('/', property_controller.list_property)
router.post('/', property_controller.add_property)
router.put('/:id', property_controller.edit_property)
router.delete('/:id', property_controller.delete_property)

module.exports = router;