const shopControllers = {
    shop:  (req, res) => res.render("shop",{layout: "layouts/mainLayout"}), // esta usando el layout de admin, para test
    item: (req, res) => res.render("item",{layout: "layouts/shopLayout"}),
    itemAdd: (req, res) => res.send('Add item'),
    cart: (req, res) => res.render("cart",{layout:"layouts/mainLayout"}),
    cartEdit: (req, res) => res.send('Edit cart'),
}

module.exports = shopControllers;