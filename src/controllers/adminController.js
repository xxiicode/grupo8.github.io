const sharp = require("sharp");
const path = require("path");
const pcolor = require("picocolors") 
const { validationResult } = require("express-validator")
const model = require('../models/producto')

const adminControllers = {

admin: async (req, res) => {
    try{
        const productos = await model.findAll({
            attributes: ["id", "nombre", "precio"],
        });
        /*console.log(productos); */
        res.render("admin", {productos, layout: "layouts/adminLayout"} );
    } catch(error) {
        console.log(error);
        res.status(500).send(error)
    }
    
},

create: (req, res) => res.render("create", {layout: "layouts/adminLayout", values: {}}),

store: async (req, res) => {
    console.log(pcolor.cyan('consolelog antes de chekear errores:'),req.body);
    const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.render("create", {
                values: req.body,
                errors: errors.array(),
            });
        }
    try {
        const producto = await model.create(req.body);
        console.log(producto)
        if(req.file) {
            console.log(req.file);
            sharp(req.file.buffer)
                .resize(500)
                .toFile(path.resolve(__dirname, `../../public/uploads/funko_${producto.id}.jpg`));  // tmb puede dos datos(500, 500)
                
            }
        res.redirect("/admin/");
    } catch (error) {
        console.log(pcolor.red('error al subir data'), error );
        res.status(500).send(error)
    }
},

edit: (req, res) => res.render("edit", {layout: "layouts/adminLayout"}),
modify: (req, res) => res.send("Route for admin edit id put"),
destroy: (req, res) => res.send("Route for admin delete id")
} 




    module.exports = adminControllers;