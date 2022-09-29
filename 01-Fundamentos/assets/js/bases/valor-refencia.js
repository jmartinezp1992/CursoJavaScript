let a = 10;
let b = a;
a=30;
console.log(a,b);



const cambiaNombre = ({...persona}) => { //para romper la referencia y que no se actualicen las dos variables
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre:'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});

//Arrays

const frutas = ['pera', 'manzana', 'melocoton']
const otrasFrutas= [...frutas]; // Asi se evita que se editen ambos arrays

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});