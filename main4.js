/**crea un array con i nomi delgli invitati , chiedi all'utente il nome 
 e comunicagli se puo partecipare alla festa */
let lista_invitati = ("[francesco],[giovanni],[marco],[alessandro]");
console.log(`lista invitati ${lista_invitati}`);

let nome_invitato = prompt("verifica se il tuo nome e tra quelli delgi invitati");
console.log(`il nome inserito è ${nome_invitato}`);


if (lista_invitati.includes(nome_invitato.includes(nome_invitato))) {
    console.log(`welcome`);
} else {
    console.log(`sorry`);
}