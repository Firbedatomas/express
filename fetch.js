const fetch = require("node-fetch");
/* fetch('https://pokeapi.co/api/v2/pokemon/')
.then(res=>res.json())
.then(data =>{
//console.log(data.results);
data.results.forEach(element => {
    console.log(element.name);
});
})
.catch(err => console.log(err);); */

//async away

const obtenerPokemones = async() =>{
    try{
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await res.json();
  /*   data.results.forEach(element => {
        console.log(element.name);
    }); */
    const arrayNombres = data.results.filter(poke => poke.name === 'bulbasaur');
    console.log(arrayNombres);
    }
    catch(err){
console.log(err);
    }
}
obtenerPokemones();