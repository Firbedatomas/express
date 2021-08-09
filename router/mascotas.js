const express = require ("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render('mascotas',{
    arrayMascotas:[
        { id: "kjsd83a2", nombre: "rex", descripcion: "negro y peludo"},
        { id: "d33c2c3d", nombre: "mulan", descripcion: "alta y ancha"},
        { id: "kjsd832v", nombre: "ratt", descripcion: "linda y mala"},
        { id: "koijo3s2", nombre: "boa", descripcion: "des y peludo"},
                ]
            })
        });


module.exports = router;