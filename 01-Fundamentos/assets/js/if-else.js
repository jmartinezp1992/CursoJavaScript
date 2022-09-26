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