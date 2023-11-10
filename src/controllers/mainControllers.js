const mainControllers = {
    home: (req, res) => res.render('home'),
    contact: (req, res) => res.send('Este es el contacto'),
    about: (req, res) => res.send('Este es el about'),
    faq: (req, res) => res.send('Este es el faq')
}

module.exports = mainControllers;