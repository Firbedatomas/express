const {frutas, dinero} = require('./fruta.js');
const cowsay = require("cowsay");
frutas.forEach(item=>{
    console.count(item);
});
console.log(dinero);


const mensaje =(nombre)=>{
    return 'hola soy '+ nombre;
};
const resultado = mensaje('Tomas');
console.log(resultado);

const suma = (num = 0)=>{
    console.log(num + 3);
}
suma(2);

//template string
const numeroDos = (num1, num2)=>(`la suma es ${num1 + num2}`);
const resultadoDos= numeroDos(20,35);
console.log(resultadoDos);
//objetos

const mascota ={
    nombre: 'Tom',
    edad: 11,
    raza: ['peludo', 'negro']
}
/* const nombreMascota=mascota.nombre;
const razaMascota=mascota.raza[0];
console.log(nombreMascota);
console.log(razaMascota); */

const {nombre, edad, raza}= mascota;
console.log(nombre, edad, raza);



const web ={
    nombre: 'google',
    links:{
        enlace: 'www.google.com'
    },
    redessociales:{
        youtube: {
        enlace: 'youtube.com/google',
        nombresocial: 'google yt'
        }
    }
}
const {enlace, nombresocial}= web.redessociales.youtube;
console.log(enlace);
console.log(nombresocial);