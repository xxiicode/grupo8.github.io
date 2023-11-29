const express = require("express");
const router = express.Router();
const authControllers = require('../controllers/authControllers');

router.get("/auth/login", authControllers.login);

router.post("/auth/login", (req, res) => res.send("Este es el Login Enviado"));

router.get("/auth/register", authControllers.register);

router.post("/auth/register", (req, res) => res.send("Este es el Register Enviado"));

router.get("/auth/logout", authControllers.logout);

module.exports = router;
