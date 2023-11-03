const express = require("express");
const app = express();
const pcolor = require("picocolors"); // para usar pcolor hay que declaralo asi: pcolor.red("hola")

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

app.get('/css', (req, res) => { // test para mostrar rutas dentro de public sin el ' .html'
    res.sendFile(__dirname + '/public/css/main.css')
    });

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


// Path: 

const path = require('node:path'); //llama el modulo nativo de node llamado path, que es para trabajar con rutas de archivos
console.log(path.sep); //esto nos muestra el separador de rutas, en este caso es /

console.log(pcolor.red('hola')); //escribe hola en la consola

const test = require('./test'); // importa el archivo test.js, ose viene el chau! y el mensajeTest

console.log(pcolor.blue(test)); // imprime en consola lo que esta en test.js y no tiene su propio console log.

