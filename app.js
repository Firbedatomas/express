const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/view');

app.use(express.static(__dirname + "/public"));


app.use("/", require('./router/rutasWeb'));
app.use("/mascotas", require('./router/mascotas'));

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