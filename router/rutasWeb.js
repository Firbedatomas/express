const express = require ("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render('index', { titulo: 'Index'});
});

router.get("/servicios", (req, res) => {
    res.render('servicios', { tituloServicios: 'Servicios'});
});


module.exports = router;