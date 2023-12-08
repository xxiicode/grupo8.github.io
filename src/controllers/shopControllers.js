const model = require('../models/product')

const shopControllers = {
    shop: async (req, res) => {
        try {
            const productos = await model.findAll();
            res.render("shop", { productos, layout: "layouts/mainLayout" })
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    },
    item: (req, res) => res.render("item", { layout: "layouts/shopLayout" }),
    itemAdd: (req, res) => res.send('Add item'),
    cart: (req, res) => res.render("cart", { layout: "layouts/mainLayout" }),
    cartEdit: (req, res) => res.send('Edit cart'),
}

module.exports = shopControllers;