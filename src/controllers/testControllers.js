let tareas = [
    {id: 1, title: "tarea 1", completed: false},
    {id: 2, title: "tarea 2", completed: false},
    {id: 3, title: "tarea 3", completed: false},
    {id: 4, title: "tarea 4", completed: false},
];


const test = (req, res) => {
    res.render("test", { tareas, layout: "layouts/mainLayout" });

};

const store = (req, res) => {
    const newtarea = {
        id: Date.now(),
        title: req.body.title,
        completed: false,
    };
    tareas.push(newtarea);//en vez de push es save para la base de datos
    res.redirect("/test")
};


module.exports = {tareas, test, store};