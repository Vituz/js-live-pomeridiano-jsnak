// Creaiamo un array vuoto e chiedi all'utente di inserire un numero nell'array
var lista_numeri = [];

var somma = 0;

// Continua a chiedere numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

while (somma < 50) {

    var insert_number = Number(prompt("Inserisci un numero inferiore a 50"));

    lista_numeri.push(insert_number);

    somma += insert_number;

    console.log(somma);

}

console.log(lista_numeri);