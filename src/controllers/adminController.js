const adminControllers = {
admin: (req, res) => res.send("Route for admin"),
create: (req, res) => res.send("Route for admin create get"),
create: (req, res) => res.send("Route for admin create post"),
edit: (req, res) => res.send("Route for admin edit id get"),
edit: (req, res) => res.send("Route for admin edit id put"),
delete: (req, res) => res.send("Route for admin delete id")
} 




    module.exports = adminControllers;