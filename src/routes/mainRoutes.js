const express = require("express");
const router = express.Router();
const mainControllers = require('../controllers/mainControllers');
const testControllers = require('../controllers/testControllers');

router.get("/home", mainControllers.home);
router.get("/", mainControllers.home);

router.get("/wip", mainControllers.wip);

/* router.get("/404", mainControllers.e404); */

router.get("/contact", mainControllers.contact);

router.get("/about", mainControllers.about);

router.get("/faqs", mainControllers.faqs);

//tests de clase
router.get("/test", testControllers.test);
router.post("/test",testControllers.store);


module.exports = router;
