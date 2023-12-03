const pcolor = require("picocolors")
const { validationResult } = require("express-validator")
const model = require('../models/category')

const categoryControllers = {

    category: async (req, res) => {
        try {
            const categoria = await model.findAll();
            /*console.log(categoria); */
            res.render("category", { categoria, layout: "layouts/adminLayout", values: {} });
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }

    },

    createCategory: (req, res) => res.render("createCategory", { layout: "layouts/adminLayout", values: {} }),

    store: async (req, res) => {
/*         console.log(pcolor.cyan('consolelog antes de chekear errores:'), req.body); */
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("createCategory", {
                layout: "layouts/adminLayout",
                values: req.body,
                errors: errors.array(),
            });
        }
        try {
            const producto = await model.create(req.body);
            console.log(producto)
            res.redirect("/admin/category");
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                // Manejar el error de unicidad (producto duplicado) aquí
                res.render("createCategory", {
                    layout: "layout/adminLayout",
                    values: req.body,
                    errors: [{ msg: "El producto con ese nombre ya existe." }],
                });
            } else {
            console.log(pcolor.red('error al subir data'), error);
            res.status(500).send(error)
        }
    }},

    editCategory: async (req, res) => {
        try {
            const producto = await model.findByPk(req.params.id);
            if (producto) {
                res.render("editCategory", { values: producto, layout: "layouts/adminLayout" });
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
            return res.render("editCategory", {
                layout: "layouts/adminLayout",
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
            res.redirect("/admin/category")
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
            res.redirect("/admin/category")
        } catch (error) {
            console.log(error);
            res.send(error);
        }

    }

}

module.exports = categoryControllers;