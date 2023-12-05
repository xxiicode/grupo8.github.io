const adminControllers = {
//admin: (req, res) => res.send("Route for admin"),
admin: (req, res) => res.render("admin", { layout: "layouts/adminLayout" }),
//create: (req, res) => res.send("Route for admin create get"),
create: (req, res) => res.render("create", { layout: "layouts/adminLayout"}),
//create: (req, res) => res.send("Route for admin create post"),
create: (req, res) => res.render("create", { layout: "layouts/adminLayout"}),
//edit: (req, res) => res.send("Route for admin edit id get"),
edit: (req, res) => res.render("edit", { layout: "layouts/adminLayout"}),
//edit: (req, res) => res.send("Route for admin edit id put"),
edit: (req, res) => res.render("edit", { layout: "layouts/adminLayout"}),
//destroy: (req, res) => res.send("Route for admin delete id"),
} 


    module.exports = adminControllers;