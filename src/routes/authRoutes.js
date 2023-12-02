const express = require("express");
const router = express.Router();
const authControllers = require('../controllers/authControllers');
const model = require('../models/user')
const { body } = require("express-validator");

const registerValidations = [
    body("email")
        .isEmail()
        .withMessage("Ingrese una direccion valida")
        .bail()
        .custom((value, { req }) => {
            return new Promise(async (resolve, reject) => {
                try {
                    const user = await model.findOne({
                        where: {
                            email: value,
                        },
                    });
                    if (user) {
                        console.log(user);
                        return reject();
                    } else {
                        return resolve();
                    }
                } catch (error) {
                    console.log(error);
                }
            })
        })
        .withMessage("Direccion de correo ya existe"),
        
    body("password")
        .isStrongPassword({
            minLength: 6,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        })
        .withMessage("La contrasenia debe tener ...")
        .bail()
        .custom( (value, {req}) => value === req.body.rpassword )
        .withMessage("Las contrasenias no coinciden"),
];

const loginValidations = [
    body("email")
        .isEmail()
        .withMessage("Ingrese una direccion valida")
];



router.get("/register", authControllers.register);
router.post("/register", registerValidations, authControllers.postRegister);

router.get("/login", authControllers.login);
router.post("/login", loginValidations, authControllers.postLogin);

router.get("/logout", authControllers.logout);

module.exports = router;
