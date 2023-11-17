const express = require("express");
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');

router.get("/home", mainControllers.home);
router.get("/", mainControllers.home);

router.get("/wip", mainControllers.wip);
router.get("/404", mainControllers.e404);

router.get("/contact", mainControllers.contact);

router.get("/about", mainControllers.about);

router.get("/faqs", mainControllers.faq);



module.exports = router;
