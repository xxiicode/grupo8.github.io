const express = require("express");
const router = express.Router();
const shopControllers = require('../controllers/shopControllers');

router.get ('/', shopControllers.shop);
router.get('/item/:id', shopControllers.item);
router.post('/item/:id', shopControllers.itemAdd);
router.get('/cart', shopControllers.cart);
router.post('/cart', shopControllers.cartEdit);

module.exports = router;