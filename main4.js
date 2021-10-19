/**crea un array con i nomi delgli invitati , chiedi all'utente il nome 
 e comunicagli se puo partecipare alla festa */
let listaInvitati = ("[francesco],[giovanni],[marco],[alessandro]");
console.log(`lista invitati ${listaInvitati}`);

let nomeInvitato = prompt("verifica se il tuo nome e tra quelli delgi invitati");
console.log(`il nome inserito è ${nomeInvitato}`);


for (let index = 0; index = listaInvitati.length; index++) {

    if (nomeInvitato == listaInvitati) {
        alert(`sei nella lista, benvenuto ${listaInvitati[index]}`);
        console.log(`sei nella lista, benvenuto ${nomeInvitato}`);
    } else {
        //alert(`non sei invitato`)
        console.log(`non sei invitato`);
    }
}