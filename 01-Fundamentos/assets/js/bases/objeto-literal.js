let personaje ={
    nombre:'Tony stark',
    codeName:'Ironman',
    vivo: false,
    edad:40,
    trajes:['Betis','Sevilla'],
    direccion:{
        zip:'1234, 2323',
        ubicacion: 'sevilla'
    }
};

console.log('Nombre', personaje.nombre);
console.log(personaje);  
console.log('Ubicacion',personaje.direccion.ubicacion); 

// Mas detalles

delete personaje.edad
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);


Object.freeze(personaje); // Bloquea la posible modificación de los valores del objeto. Pero solo a las propiedades directa, no a los valores de un posible objeto ue haya dentro.

