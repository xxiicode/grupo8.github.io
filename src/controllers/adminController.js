const sharp = require("sharp");
const path = require("path");
const pcolor = require("picocolors")
const { validationResult } = require("express-validator")
const model = require('../models/product')
const modelCategory = require('../models/category')
const fs = require("fs")

const adminControllers = {

    admin: async (req, res) => {
        try {
            const productos = await model.findAll({
             // attributes: ["id", "nombre", "precio"],
              include: "Category" 
            });
            res.render("admin", { productos, layout: "layouts/adminLayout" });
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }

    },

    create: async (req, res)  => {
        try {
        const categorias = await modelCategory.findAll();
        res.render("create", {categorias, layout: "layouts/adminLayout", values: {} })
        } catch(error) {
        console.log(error);
        res.status(500).send(error)
    }
    }, 

    store: async (req, res) => {
/*         console.log(pcolor.cyan('consolelog antes de chekear errores:'), req.body); */
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            try {
                const categorias = await modelCategory.findAll(
                    {order: [["nombre", "ASC"]]
                });
                return res.render("create", {
                    categorias,
                    layout: "layouts/adminLayout",
                    values: { ...req.params, ...req.body },
                    errors: errors.array(),
                });
                } catch(error) {
                console.log(error);
                res.status(500).send(error)
            }
            
        }
        try {
            const producto = await model.create(req.body);
            console.log(producto)
            if (req.file) {
                console.log(req.file);
                sharp(req.file.buffer)
                    .resize(500)
                    .toFile(path.resolve(__dirname, `../../public/uploads/funko_${producto.id}.webp`));  // tmb puede dos datos(500, 500)

            }
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
            const producto = await model.findByPk(req.params.id, {include: "Category"});
            if (producto) {
                const categorias = await modelCategory.findAll({
                    order: [["nombre", "ASC"]]
                });
                res.render("edit", {
                    values: producto,
                    categorias, producto,
                    layout: "layouts/adminLayout"});
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
            try {
                const categorias = await modelCategory.findAll({
                    order: [["nombre", "ASC"]]
                });
                return res.render("edit", {
                    layout: "layouts/adminlayout",
                    values: { ...req.params, ...req.body },
                    categorias,
                    errors: errors.array(),
                });
            } catch (error) {
                console.log(error);
                res.status(500).send(error);
            }
        }
    
        try {
            const producto = await model.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            res.redirect("/admin");
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                // Manejar el error de unicidad (producto duplicado) aquí
                try {
                    const categorias = await modelCategory.findAll({
                        order: [["nombre", "ASC"]]
                    });
                    res.render("edit", {
                        layout: "layouts/adminLayout",
                        values: { ...req.params, ...req.body },
                        categorias,
                        errors: [{ msg: "Un producto con ese nombre ya existe!!" }],
                    });
                } catch (error) {
                    console.log(error);
                    res.status(500).send(error);
                }
            } else {
                console.log(error);
                res.send(error);
            }
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
                        __dirname, `../../public/uploads/funko_${req.params.id}.webp`
                    ), (error) => {
                        if (error) {
                            console.log(error);
                        }
                    }
                );
            }
            console.log("Producto eliminado");
            res.redirect("/admin")
        } catch (error) {
            console.log(error);
            res.send(error);
        }

    }

}

module.exports = adminControllers;