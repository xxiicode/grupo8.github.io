const { validationResult } = require("express-validator")
const model = require("../models/user")
const bcryptjs = require("bcryptjs")


const authControllers = {

    register: (req, res) => res.render("register", { layout: "layouts/authLayout" }),
    postRegister: async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log(errors)
            return res.render("register", {
                layout: "layouts/authlayout",
                values: req.body,
                errors: errors.array()
            });
        }
        try {
            const user = await model.create(req.body);
            res.redirect("/");
        } catch(error) {
            console.log(error);
            res.send(error);
        }

    },

    login: (req, res) => res.render("login", { layout: "layouts/authLayout" }),
    postLogin: async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log(errors)
            return res.render("login", {
                layout: "layouts/authlayout",
                values: req.body,
                errors: errors.array()
            });
        }
        try {
            const user = await model.findOne({
                where: {
                    email: req.body.email,
                }
            });
            if (!user) {
                res.render("login", {
                    values: req.body,
                    errors: [{ msg: "el correo y/o contrasenia son incorrectos (email)" }],
                });
            } else if (!(await bcryptjs.compare(req.body.password, user.password))) {
                res.render("login", {
                    values: req.body,
                    errors: [{ msg: "el correo y/o contrasenia son incorrectos (password)" },
                    ]
                });
            } else {
                req.session.userId = user.id;
                res.redirect("/")
                //res.send("entro bien el user")
            }
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    },
    logout: (req, res) => {
        req.session = null
        res.redirect("login")
    } 
}

module.exports = authControllers;