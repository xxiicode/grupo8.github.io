const authControllers = {
    login: (req, res) => res.render('auth/login.ejs', {layout: "layouts/authLayout.ejs"}),
    register: (req, res) => res.render('auth/register.ejs', {layout: "layouts/authLayout.ejs"}),
    logout: (req, res) => res.send('Este es el Logout')
}

module.exports = authControllers;