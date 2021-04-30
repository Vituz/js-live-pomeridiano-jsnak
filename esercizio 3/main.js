// Crea due tag div con due id diversi
// un div avrà il testo colorato di rosso mentre l'altro di verde
// partendo da un array di numeri, stampiamo nell'id rosso i numeri
// dispari e in verde i numeri pari


var numeri = [];

for (var i = 0; i < 10; i++){
    numeri.push(i);

    if (numeri[i] % 2 == 0){
        document.getElementById("verde").innerHTML += numeri[i];
    } else {
        document.getElementById("rosso").innerHTML += numeri[i];
    }
}

console.log(numeri);
