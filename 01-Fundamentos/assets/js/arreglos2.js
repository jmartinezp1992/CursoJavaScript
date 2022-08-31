// Metodos 

let juegos = ['Zelda','Mario','Fifa'];

console.log('Largo: ',juegos.length )  // Largo de los elementos

let primero = juegos[0];
let ultimo = juegos[juegos.length-1];

juegos.forEach((elemento, indice, arr) =>{
    console.log({elemento,indice, arr});
});

let nuevaLongitud = juegos.push('The last of us'); // Añade nuevo elemento al final del array
console.log(nuevaLongitud,juegos);

juegos.unshift('hola'); // Añade nuevo elemento al comienzo del array

juegos.pop(); // Borra ultimo elemento del array

let pos = 1;

juegos.splice(pos ,2) // Recibe un punto inicial y cuantos elementos se quieren eliminar a partir de esa posición

juegos.indexOf('Fifa');// En que lugar se encuentra un elemento