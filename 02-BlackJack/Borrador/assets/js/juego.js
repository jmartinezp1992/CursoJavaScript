let deck = [];
const tipos =['C','D','H','S']; // Tipos de cartas
const cartasEspeciales =['A','J','Q','K'];


//Esta función crea una nueva baraja
const crearDeck = () => {

    for(let i=2; i<=10; i++){
        for(let tipo of tipos){
             deck.push(i + tipo);
        }
    }

    for(let tipo of tipos){
        for(let especial of cartasEspeciales){
            deck.push(especial + tipo);
        }
    }

    deck = _.shuffle(deck); // Mezclar objetos del array
    console.log(deck);
    return deck;

}

crearDeck();

//Esta función me permite tomar una carta
const pedirCarta = () =>{

    if(deck.length === 0){
       throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();
    console.log(deck);
    console.log(carta);

    return carta;

}
//pedirCarta();

//Asignar valor a carta

const valorCarta = (carta) =>{

    //const valor = carta[0]; //En javascript todo los string pueden ser trabajados como un array
    const valor = carta.substring(0, carta.length -1);

    return ( isNaN( valor )) ? 
        ( valor === 'A') ? 11 : 10
        : valor *1;
    //let puntos =0;
    ////console.log({valor});
    //if( isNaN(valor)){    //Evalua si es un numero o no
    //    puntos = (valor === 'A') ? 11 : 10;
    //}else{
    //    puntos = valor * 1; //Este valor hay que transformarlo de string a integer. Multiplicando por 1 se transforma.
    //}
    //console.log(puntos);
}
const valor = valorCarta(pedirCarta());

console.log({ valor });

