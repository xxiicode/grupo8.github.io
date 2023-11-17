const express = require("express");
const router = express.Router();
const shopControllers = require('../controllers/shopControllers');

router.get ('/shop', shopControllers.shop);
router.get('/shop/item/:id', shopControllers.item);
router.post('/shop/item/:id', shopControllers.itemAdd);
router.get('/shop/cart', shopControllers.cart);
router.post('/shop/cart', shopControllers.cartEdit);

module.exports = router;