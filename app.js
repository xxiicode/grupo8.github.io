//Dependencias -----------llama las dependencias
const express = require("express");
const app = express();
const pcolor = require("picocolors"); // para usar pcolor hay que declaralo asi: pcolor.red("hola")
const fs = require("node:fs");
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const methodOverride = require('method-override');
const path = require('node:path'); //llama el modulo nativo de node llamado path, que es para trabajar con rutas de archivos
const expressLayouts = require('express-ejs-layouts'); // para usar layouts de ejs
// EJS
app.set("view engine", "ejs"); // esto es para que funcione ejs
app.set("views", path.join(__dirname, "./src/views"));
/* app.set("views", "./src/views"); es lo mismo que el de arriba*/

// Layouts
app.use(expressLayouts); // para usar layouts de ejs, va luego del "view engine"
app.set("layout", "layouts/mainLayout"); // este seria el layout por defecto


//Middleware -------------- Usa el middleware de express para poder usar archivos estaticos en public
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false })); // esto es para que funcione los formularios
app.use(express.json()); // para las peticiones json
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
app.set("view engine", "ejs"); // esto es para que funcione ejs




// Listen (va al final)
/* app.use((req, res, next) => {
    res.status(404).send('Error404: Gracias, vuelvas prontos');
}); */
app.use((req, res, next) => {
    res.status(404).render("404",{layout: "layouts/mainLayout"});
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));






// Ejemplo del forulario clase 27--- /////////////////////////No anda por que esta despues del puntoLISTEN /////////////////
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



// Path & test: 

// const path = require('node:path'); //llama el modulo nativo de node llamado path, que es para trabajar con rutas de archivos
console.log(path.sep); //esto nos muestra el separador de rutas, en este caso es /

console.log(pcolor.red('hola')); //escribe hola en la consola, uso pcolor para que sea rojo

const test = require('./test'); // importa el archivo test.js, osea viene el chau! y el mensajeTest(sin log) (green)
const { shop } = require("./src/controllers/shopControllers");

console.log(pcolor.blue(test)); // imprime en consola lo que esta en test.js y no tiene su propio console log.


/* // crea la ruta contacto, no es lo mismo que contacto.html
app.get('/contacto2', (req, res) => {
    res.send("Soy el contacto que no existe");
});

// crea la ruta nosotros.
app.get('/nosotros', (req, res) => { // es para mostrar contenido fuera del publico, dandole ruta 'nosotros'
res.sendFile(__dirname + '/nosotros.html')
}); */
