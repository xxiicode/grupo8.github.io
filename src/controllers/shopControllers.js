const model = require('../models/product')
const { productoEsNuevo } = require('../js/helpers');


const shopControllers = {
    shop: async (req, res) => {
        try {
            const productos = await model.findAll({
                order: [['createdAt', 'DESC']],
            });
            const fechaActual = new Date();
            productos.forEach(producto => {
                producto.esNuevo = productoEsNuevo(producto.createdAt, fechaActual);
            });
            res.render("shop", { productos, layout: "layouts/mainLayout" })
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    },
    item: async (req, res) => {
        try {
            const producto = await model.findByPk(req.params.id);
            const relacionados = await model.findAll();	
            res.render("item", { producto, relacionados, layout: "layouts/shopLayout" })
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    },
    itemAdd: (req, res) => res.send('Add item'),
    cart: (req, res) => res.render("cart", { layout: "layouts/mainLayout" }),
    cartEdit: (req, res) => res.send('Edit cart'),
}

module.exports = shopControllers;