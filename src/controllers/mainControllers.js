const mainControllers = {
    home: (req, res) => res.render("home",{layout: "layouts/mainLayout"}),
    contact: (req, res) => res.redirect("/wip"),
    about: (req, res) => res.render("wip",{layout: "layouts/mainLayout"}),
    faqs: (req, res) => res.redirect("/wip"),
    wip: (req, res) => res.render("wip",{layout: "layouts/mainLayout"}), // esta usando el layout de admin, para test
/*     e404: (req, res) => res.render('404') */

}


module.exports = mainControllers;