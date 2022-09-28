const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not a la negacion');

console.log(true);
console.log(!true); //Negacion, trasnforma valor boleano a lo opuesto
console.log(!false);

console.log( !regresaFalse());

console.warn('AND'); // True si todos los valores son verdaderos

console.log( true && true); //True
console.log( true && !false); //True


console.log('===========');
console.log( regresaFalse() && regresaTrue() ); //Solo devuelve el regresa false porque sabe que va a ser falso, por eso devuelve solo regreesa false
console.log( regresaTrue() && regresaFalse() ); //Aqui devielve los dos métodos

regresaTrue() && regresaFalse()


console.warn('OR'); // Si algo es true, devuelve true
console.log( regresaFalse() || regresaTrue() );
console.log( regresaTrue() || regresaFalse() );  //Solo devuelve el true porque sabe que va a dar true dando igual lo que venga despues


console.warn('Asignaciones')

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo';
//const a1 = false && 'Hola Mundo'; // Devuelve false porque no ejecuta más
const a2 = 'Hola' && 'Hola Mundo' && soyFalso; 
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyNull || soyUndefined || 'Ya no soy falso';
const a5 = soyFalso || regresaTrue() || soyUndefined || 'Ya no soy falso'; // Devuelve True porque es el primer valor permitido y no ejecuta mas



console.log({a1,a2,a3, a4, a5 }); // Asigna el último valor para asignar en la variable

//No se deberian de tener mas de 3 condiciones 