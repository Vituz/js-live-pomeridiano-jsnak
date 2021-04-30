// Fai inserire un numero, che chiameremo N, all'utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100
// Ogni volta che ne crei uno stampalo a schermo


var numero = prompt("Inserisci un numero");

var array_bidimensionale = [];

for(var i = 0; i < numero; i++){
  
    var array_utente = [];

    for (var j = 0; j < 10; j++){

        array_utente.push(randomNum(1, 100));
    } 

    // console.log(array_utente);
    array_bidimensionale.push(array_utente);
}

console.log(array_bidimensionale);

function randomNum (min, max){
    var num = Math.floor(Math.random() * (max - min +1) + min);
    return num;
}