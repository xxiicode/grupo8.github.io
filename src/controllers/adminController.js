const adminControllers = {
//admin: (req, res) => res.send("Route for admin"),
admin: (req, res) => res.render("admin", { layout: "layouts/adminLayout" }),
create: (req, res) => res.render("create", { layout: "layouts/adminLayout"}),
create: (req, res) => res.render("create", { layout: "layouts/adminLayout"}),
edit: (req, res) => res.render("edit", { layout: "layouts/adminLayout"}),
edit: (req, res) => res.render("edit", { layout: "layouts/adminLayout"}),
//delete: (req, res) => res.render("delete", { layout: "layouts/adminLayout"}),
} 




    module.exports = adminControllers;