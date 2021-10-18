//l'utente inserisce due numeri in successione, con due prompt.
//il software stampa il maggiore

let numero1 = prompt("inserisci un numero");
let numero2 = prompt("inserisci un numero");

if (numero1 > numero2) {
    allert("il numero maggiore è ${numero1}");
} else if (numero1 == numero2) {
    allert("i numeri sono pari ${numero1}, ${numero2}")
}
