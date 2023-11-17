const express = require("express");
const router = express.Router();
const authControllers = require('../controllers/authControllers');

router.get("/login", authControllers.login);

router.post("/login", (req, res) => res.send("Este es el Login Enviado"));

router.get("/register", authControllers.register);

router.post("/register", (req, res) => res.send("Este es el Register Enviado"));

router.get("/logout", authControllers.logout);

module.exports = router;
