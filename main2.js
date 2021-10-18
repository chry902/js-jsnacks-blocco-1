let parola1 = prompt("inserisci una parola");
let parola2 = prompt("inserisci una parola");

if (parola1.length > parola2.length) {
    alert(`la parola maggiore è ${parola1}`);
    console.log("la parola maggiore è ${parola1}");
} else if (parola1.length == parola2.length) {
    alert(`le parole hanno lunghezza uguale ${parola1}, ${parola2}`)
    console.log("le parole hanno lunghezza uguale ${parola1}, ${parola2");
} else {
    alert(`la parola maggiore è ${parola2}`);
}
