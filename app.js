const express = require("express");
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;

//Conexion a base de datos
const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASS}@cluster0.bde3h.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))

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