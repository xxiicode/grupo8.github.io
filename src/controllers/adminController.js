const sharp = require("sharp");
const path = require("path");
const pcolor = require("picocolors")
const { validationResult } = require("express-validator")
const model = require('../models/producto')
const fs = require("fs")

const adminControllers = {

    admin: async (req, res) => {
        try {
            const productos = await model.findAll({
                attributes: ["id", "nombre", "precio"],
            });
            /*console.log(productos); */
            res.render("admin", { productos, layout: "layouts/adminLayout" });
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }

    },

    create: (req, res) => res.render("create", { layout: "layouts/adminLayout", values: {} }),

    store: async (req, res) => {
        console.log(pcolor.cyan('consolelog antes de chekear errores:'), req.body);
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
            if (req.file) {
                console.log(req.file);
                sharp(req.file.buffer)
                    .resize(500)
                    .toFile(path.resolve(__dirname, `../../public/uploads/funko_${producto.id}.jpg`));  // tmb puede dos datos(500, 500)

            }
            res.redirect("/admin/");
        } catch (error) {
            console.log(pcolor.red('error al subir data'), error);
            res.status(500).send(error)
        }
    },

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
        } catch {
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
            if (destroyed == 1) {
                fs.unlink(
                    path.resolve(
                        __dirname, `../../public/uploads/funko_${req.params.id}.jpg`
                    ), (error) => {
                        if (error) {
                            console.log(error);
                        }
                    }
                );
            }
            res.redirect("/admin")
        } catch (error) {
            console.log(error);
            res.send(error);
        }

    }

}

module.exports = adminControllers;