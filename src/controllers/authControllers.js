const authControllers = {
    login: (req, res) => res.render('login'),
    register: (req, res) => res.send('register'),
    logout: (req, res) => res.send('Este es el Logout')
}

module.exports = authControllers;