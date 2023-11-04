//llama las dependencias
const express = require("express");
const app = express();
const pcolor = require("picocolors"); // para usar pcolor hay que declaralo asi: pcolor.red("hola")
const fs = require('node:fs');

// Usa el middleware de express para poder usar archivos estaticos en public
app.use(express.static("public"));

// esto es para que funcione el formulario de contacto, ampliaremos... pero es un middleware de express
app.use(express.urlencoded()); 

// crea la rusa raiz (ya hay una igual en public, index.html)
app.get('/', (req, res) => {
    res.send("hola Express");
});

// crea la ruta contacto, no es lo mismo que contacto.html
app.get('/contacto2', (req, res) => {
    res.send("Soy el contacto que no existe");
});

// crea la ruta nosotros.
app.get('/nosotros', (req, res) => { // es para mostrar contenido fuera del publico, dandole ruta 'nosotros'
res.sendFile(__dirname + '/nosotros.html')
});

// crea la ruta contacto, llamando contacto.html
app.get('/contacto', (req, res) => {
    res.sendFile(__dirname + "/contacto.html");
});
// esto es para mandar datos desde el formulario de contacto
app.post('/contacto', (req, res) => {
    console.log(req.body);
    res.send("Formulario recibido");
});

// vamos a llamar la ruta del archivo json
app.get('/personajes', (req, res) => {
    const json = fs.readFileSync(__dirname + '/characters.json');
    res.json(JSON.parse(json));
    //res.send(JSON.parse(json));
});

// esto crea una ruta para acceder a la carpeta public, en este caso a main.css, sin usar el punto html
app.get('/css', (req, res) => { // test para mostrar rutas dentro de public sin el ' .html'
    res.sendFile(__dirname + '/public/css/main.css')
    });

// crea el server y donde escucha
const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


// Path & test: 

const path = require('node:path'); //llama el modulo nativo de node llamado path, que es para trabajar con rutas de archivos
console.log(path.sep); //esto nos muestra el separador de rutas, en este caso es /

console.log(pcolor.red('hola')); //escribe hola en la consola, uso pcolor para que sea rojo

const test = require('./test'); // importa el archivo test.js, osea viene el chau! y el mensajeTest(sin log) (green)

console.log(pcolor.blue(test)); // imprime en consola lo que esta en test.js y no tiene su propio console log.
