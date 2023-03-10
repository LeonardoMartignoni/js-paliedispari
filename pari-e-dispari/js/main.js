// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo all'utente se sceglie pari o dispari
let userChoice = prompt('Pari o dispari?');

// Verifico che l'utente abbia inserito i parametri corretti
while (userChoice != 'pari' && userChoice != 'dispari') {
    userChoice = prompt('Parametro non corretto. Pari o dispari?');
}

// Creo una funziona per generare un numero random da 1 a 5
function randomNumber(num1, num2) {
    const randomGenerated = Math.floor(Math.random() * num2) + num1;
    return randomGenerated;
}

// Creo una variabile dove inserire il numero per l'utente
let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

// Verifico che il numero inserito rispetti i parametri
while (userNumber > 5 || userNumber < 1 || isNaN(userNumber)) {
    userNumber = parseInt(prompt('Valore non valido. Reinserisci un numero da 1 a 5'));
}

console.log('Numero utente: ' + userNumber);

// Creo una variabile dove inserire la funzione per il computer
const botNumber = randomNumber(1, 5);
console.log('Numero bot: ' + botNumber);

// Sommo i due numeri
const sumNumber = userNumber + botNumber;

// Se la somma dei due numeri è pari E l'utente ha scelto pari
if (sumNumber % 2 == 0 && userChoice == 'pari') {

    // Dichiaro l'utente vincente
    console.log('Hai vinto! La somma è ' + sumNumber);
}

// ALTRIMENTI Se la somma dei due numeri è dispari E l'utente ha scelto dispari
else if (sumNumber % 2 != 0 && userChoice == 'dispari') {

    // Dichiaro l'utente vincente
    console.log('Hai vinto! La somma è ' + sumNumber);
}

// ALTRIMENTI Se la somma dei due numeri è pari E l'utente ha scelto dispari
else if (sumNumber % 2 == 0 && userChoice == 'dispari') {

    // Dichiaro l'utente perdente
    console.log('Hai perso, La somma è ' + sumNumber);
}

// ALTRIMENTI Se la somma dei due numeri è dispari E l'utente ha scelto pari
else if (sumNumber % 2 != 0 && userChoice == 'pari') {

    // Dichiaro l'utente perdente
    console.log('Hai perso, La somma è ' + sumNumber);
}