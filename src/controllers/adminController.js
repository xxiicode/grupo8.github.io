const sharp = require("sharp");
const path = require("path");
const pcolor = require("picocolors") 
const { validationResult } = require("express-validator")

const adminControllers = {
admin: (req, res) => res.render("admin", {layout: "layouts/adminLayout"}),

create: (req, res) => res.render("create", {layout: "layouts/adminLayout", values: {}}),

store: (req, res) => {
    console.log(pcolor.cyan('consolelog antes de chekear errores:'),req.body)
    const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.render("create", {
                values: req.body,
                errors: errors.array(),
            });
        }
    console.log(req.body, req.file, req.file.buffer, req.file.originalname);
    sharp(req.file.buffer).resize(500).toFile(path.resolve(__dirname, "../../public/uploads/" + req.file.originalname));  // tmb puede dos datos(500, 500)
    res.send("Route for admin create post");
},

edit: (req, res) => res.render("edit", {layout: "layouts/adminLayout"}),
editPut: (req, res) => res.send("Route for admin edit id put"),
destroy: (req, res) => res.send("Route for admin delete id")
} 




    module.exports = adminControllers;