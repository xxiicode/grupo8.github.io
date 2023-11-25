const authControllers = {
    login: (req, res) => res.render("login",{layout: "layouts/adminLayout"}),
    register: (req, res) => res.render("register", {layout: "layouts/adminLayout"}),
    logout: (req, res) => res.render("login", {layout: "layouts/adminLayout"})
}

module.exports = authControllers;