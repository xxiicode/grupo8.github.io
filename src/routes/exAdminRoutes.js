const express = require("express");
const router = express.Router();
// BORRAME, y HACEME DE NUEVO!! 666 //////////////////////////////

router.get ('/', (req, res) => {
res.send("admin productos")
});

router.post ('/', (req, res) => {
    console.log(req.body);
    res.send("admin crear productos")
    });

router.put ('/:id', (req, res) => {
    console.log(req.body, req.params);
    res.send("admin editar productos")
    });

router.delete ('/:id', (req, res) => {
    console.log(req.params);
    res.send("admin borrar productos")
    });

module.exports = router;