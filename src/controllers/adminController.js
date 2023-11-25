const adminControllers = {
admin: (req, res) => res.render("admin", {layout: "layouts/adminLayout"}),
create: (req, res) => res.render("create", {layout: "layouts/adminLayout"}),
create2: (req, res) => res.send("Route for admin create post"),
edit: (req, res) => res.render("edit", {layout: "layouts/adminLayout"}),
edit2: (req, res) => res.send("Route for admin edit id put"),
delete: (req, res) => res.send("Route for admin delete id")
} 




    module.exports = adminControllers;