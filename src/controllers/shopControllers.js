const shopControllers = {
    shop:  (req, res) => res.send("Shop"),
    item: (req, res) => res.send('Item'),
    itemAdd: (req, res) => res.send('Add item'),
    cart: (req, res) => res.send('Cart'),
    cartEdit: (req, res) => res.render('Cart edit'), 
}

module.exports = shopControllers;