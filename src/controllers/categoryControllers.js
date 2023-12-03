const pcolor = require("picocolors")
const { validationResult } = require("express-validator")
const model = require('../models/category')

const adminControllers = {

    admin: async (req, res) => {
        try {
            const categorias = await model.findAll({
                attributes: ["id", "nombre", "precio"],
            });
            /*console.log(categorias); */
            res.render("admin", { categorias, layout: "layouts/adminLayout" });
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }

    },

    create: (req, res) => res.render("create", { layout: "layouts/adminLayout", values: {} }),

    store: async (req, res) => {
/*         console.log(pcolor.cyan('consolelog antes de chekear errores:'), req.body); */
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("create", {
                values: req.body,
                errors: errors.array(),
            });
        }
        try {
            const producto = await model.create(req.body);
            console.log(producto)
            res.redirect("/admin/");
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                // Manejar el error de unicidad (producto duplicado) aquí
                res.render("create", {
                    values: req.body,
                    errors: [{ msg: "El producto con ese nombre ya existe." }],
                });
            } else {
            console.log(pcolor.red('error al subir data'), error);
            res.status(500).send(error)
        }
    }},

    edit: async (req, res) => {
        try {
            const producto = await model.findByPk(req.params.id);
            if (producto) {
                res.render("edit", { values: producto, layout: "layouts/adminLayout" });
            } else {
                res.status(404).send("el producto no existe")
            }
        } catch (error) {
            console.log(pcolor.red(error));
            res.send(error);
        }
    },

    update: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("create", {
                values: req.body,
                errors: errors.array(),
            });
        }
        try {
            const producto = await model.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            res.redirect("/admin")
        } catch(error) {
            console.log(error);
            res.send(error);
        }
    },

    destroy: async (req, res) => {
        console.log(req.params);
        try {
            const destroyed = await model.destroy({
                where: {
                    id: req.params.id,
                }
            });
            console.log(destroyed);
            res.redirect("/admin")
        } catch (error) {
            console.log(error);
            res.send(error);
        }

    }

}

module.exports = adminControllers;