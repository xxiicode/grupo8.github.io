const express = require("express");
const router = express.Router();
const categoryControllers = require('../controllers/categoryController')
const { body } = require('express-validator'); // para validar los campos del formulario
const validations = [
    body("nombre")
        .not()
        .isEmpty()
        .withMessage("El nombre es obligatorio!")
        .bail()
        .isLength({min: 3})
        .withMessage("tiene que tener 3 caracteres minimo!")
];


router.get ('/', categoryControllers.admin);
/* router.get ("/:id", categoryController.show); */

router.get ('/create', categoryControllers.create);
router.post ('/create', validations, categoryControllers.store);

router.get ('/edit/:id', categoryControllers.edit);
router.put ('/edit/:id', validations, categoryControllers.update);

router.delete ('/delete/:id', categoryControllers.destroy);


    module.exports = router;