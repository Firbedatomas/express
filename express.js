const express = require("express");
const app = express();
const port = 3000;

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/view');

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render('index', { titulo: 'Index'});
});
app.get("/servicios", (req, res) => {
    res.render('servicios', { tituloServicios: 'Servicios'});
});
app.get("/404", (req, res) => {
    res.render('404', { 
        titulo: "404",
        descripcion: "pagina perdida"
    });
});

app.listen(port, () => {
  console.log(`Esuchando puerto: ${port}`);
});

app.use((req, res, next)=>{
    res.status(404).render("404");
})