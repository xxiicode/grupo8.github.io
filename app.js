const express = require("express");
const app = express();

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send("hola Express");
});

app.get('/contacto', (req, res) => {
    res.send("Soy el contacto que no existe");
});

app.get('/nosotros', (req, res) => { // es para mostrar contenido fuera del publico, dandole ruta 'nosotros'
res.sendFile(__dirname + '/nosotros.html')
});

app.get('/css', (req, res) => { // test para mostrar rutas dentro de public sin el '.html'
    res.sendFile(__dirname + '/public/css/main.css')
    });

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));