const express = require("express");
const router = express.Router();
const adminControllers = require('../controllers/adminController')

router.get ('/', adminControllers.admin);
router.get ('/create', adminControllers.create);
router.post ('/create', adminControllers.create);
router.get ('/edit/:id', adminControllers.edit);
router.put ('/edit/:id', adminControllers.edit);
router.delete ('/delete/:id', adminControllers.destroy);


    module.exports = router;