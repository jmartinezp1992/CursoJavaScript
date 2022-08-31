function crearPersona(nombre, apellido){
    return {
        nombre,  //Si el nombre de la propiedad es el mismo que el de la variable a la que se quiere hacer la impresión. Basta poner solo la variable.
        apellido: apellido
    }
}

const crearPersona = (nombre,apellido) => ((nombre,apellido)); // Los parentesis permiten indicar que se quiere regresar lo de los parentesis como un objeto

const persona = crearPersona ('Juan', 'Martinez');
 console.log(persona);


function imprimeArgumentos(){
    console.log()
}