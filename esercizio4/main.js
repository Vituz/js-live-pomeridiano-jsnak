// Dare la possibilità di inserire due parole
// Verificare tramite una funzione che le due parole abbiano la
// stessam lunghezza. Se hanno la stessa lunghezza, stamparele
// entrambe altrimenti stampare la più lunga delle due.

var parola_1 = prompt("Inserisci una parola");

var parola_2 = prompt("Inserisci una seconda parola");

ifUguali(parola_1, parola_2);

function ifUguali (word_1, word_2){

    if (word_1.length == word_2.length){
        console.log(word_1 + " " + word_2);
    } else if (word_1.length > word_2.length){
        console.log(word_1);
    } else {
        console.log(word_2);
    }
    
}