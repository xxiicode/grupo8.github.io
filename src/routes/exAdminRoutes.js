const express = require("express");
const router = express.Router();
// BORRAME, y HACEME DE NUEVO!! 666 //////////////////////////////

router.get ('/', (req, res) => {
res.send("EX admin productos")
});

router.post ('/', (req, res) => {
    console.log(req.body);
    res.send("EX admin crear productos")
    });

router.put ('/:id', (req, res) => {
    console.log(req.body, req.params);
    res.send("EX admin editar productos")
    });

router.delete ('/:id', (req, res) => {
    console.log(req.params);
    res.send("EX admin borrar productos")
    });

module.exports = router;