let a = 5;


if(a >= 2){

    console.log('A es mayor que 10');
}else{
    console.log('A es menor a 10');
}

//console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDate();
console.log(dia);

if (dia == 27){ //Dobble igual comprueba, un igual asigna. Con tres igual, comprueba tambien hasta que el tipado sea igual.
    console.log('Domingo');
}else{
    console.log('No es Domingo');
}

// Alternativa a if else o switch, unicamente objetos

dia = 3; //0:domingo. 1 lunes,...

//Con objetos

const diaLetras = {
   0: 'domingo',
   1: 'lunes',
   2: 'martes',
   3: 'miercoles',
   4: 'jueves',
   5: 'viernes',
   6: 'sabado'
}

console.log(diaLetras[dia] || 'Dia no definido');


// Con arrays

const diaLetras2 = [
    'domingo',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado'
];

nsole.log(diaLetras2[dia]);