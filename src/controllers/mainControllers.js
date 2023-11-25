const mainControllers = {
    home: (req, res) => res.render("home",{layout: "layouts/mainLayout"}),
    contact: (req, res) => res.render("wip",{layout: "layouts/mainLayout"}),
    about: (req, res) => res.render("wip",{layout: "layouts/mainLayout"}),
    faq: (req, res) => res.render("wip",{layout: "layouts/mainLayout"}),
    wip: (req, res) => res.render("wip",{layout: "layouts/mainLayout"}), // esta usando el layout de admin, para test
/*     e404: (req, res) => res.render('404') */
}

module.exports = mainControllers;