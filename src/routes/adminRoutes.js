const express = require("express");
const router = express.Router();
const adminControllers = require('../controllers/adminController')
const multer = require('multer'); // para usar multer
const upload = multer({storage: multer.memoryStorage() }); // mas multer
const { body } = require('express-validator'); // para validar los campos del formulario
const validations = [
    body("product")
        .not()
        .isEmpty()
        .withMessage("El nombre es obligatorio!")
        .bail()
        .isLength({min: 5})
        .withMessage("tiene que tener 5 caracteres minimo!")
        .escape(),
];


router.get ('/', adminControllers.admin);
router.get ('/create', adminControllers.create);
/* router.post ('/create', adminControllers.createPost); */
router.post ('/', upload.single("imagen"), validations, adminControllers.store);
router.get ('/edit/:id', adminControllers.edit);
router.put ('/edit/:id', adminControllers.editPut);
router.delete ('/delete/:id', adminControllers.destroy);


    module.exports = router;