const authControllers = {
    login: (req, res) => res.send('Este es el Login'),
    register: (req, res) => res.send('Este es el Register'),
    logout: (req, res) => res.send('Este es el Logout')
}

module.exports = authControllers;