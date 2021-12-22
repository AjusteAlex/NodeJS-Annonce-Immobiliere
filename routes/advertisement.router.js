const express = require('express');
const router = express.Router();
const multer  = require('multer');

const advertisement_controller = require('../controllers/advertisement.controller.js');

const storage = multer.diskStorage({
    destination: (req, filename, cb) => {
        cb(null, './public/upload/advertisement');
    },
    filename:(req, file,cb)=>{
        cb(null, Date.now() + '-' + file.originalname);
    }
})
const upload = multer({ storage });

router.get('/', advertisement_controller.list_advertisement)
router.get('/:id', advertisement_controller.detail_advertisement)
router.post('/',upload.single('picture'), advertisement_controller.add_advertisement)
router.put('/:id', advertisement_controller.edit_advertisement)
router.delete('/:id', advertisement_controller.delete_advertisement)

module.exports = router;