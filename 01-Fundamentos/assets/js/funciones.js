
function saludar (nombre){
    console.log('Hola' + nombre);
    return 1;
    console.log('Hola'); // Esto no se mostrará porque ña funcion se para una vez devuelve el return

}

//const saludar2= function(){
//  console.log('Hola Mundo');
//}

const saludaFlecha = () =>{
    console.log('Hola Flecha')
}

saludar('Juan');
//saludar2();
saludaFlecha();


function sumar(a,b){
    return a+b;
}

//const sum2 = (a,b) =>{
//    return a+b;
//}


const sum2 = (a,b) => a+b; // Cuando solo hay una operacion en la funcion se puede hacer de esta manera


console.log(sumar(1,2));