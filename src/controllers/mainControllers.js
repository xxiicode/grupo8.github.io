const mainControllers = {
    home: (req, res) => res.render('home'),
    contact: (req, res) => res.send('Este es el contacto'),
    about: (req, res) => res.send('Este es el about'),
    faq: (req, res) => res.send('Este es el faq'),
    wip: (req, res) => res.render("wip",{layout: "layouts/adminLayout"}), // esta usando el layout de admin, para test
/*     e404: (req, res) => res.render('404') */
}

module.exports = mainControllers;