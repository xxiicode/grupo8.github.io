const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.send("pagina Index");
});

router.get("/contact", (req, res) => {
    res.send("pagina Contact");
});

router.get("/about", (req, res) => {
    res.send("pagina about");
});

router.get("faqs", (req, res) => {
    res.send("pagina faqs");
});



module.exports = router;
