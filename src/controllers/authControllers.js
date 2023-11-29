const authControllers = {
    login: (req, res) => res.render('login',{layout: "layouts/authLayout"} ),
    register: (req, res) => res.render('register', {layout: "layouts/authLayout"}),
    logout: (req, res) => res.send('Este es el Logout')
}

module.exports = authControllers;