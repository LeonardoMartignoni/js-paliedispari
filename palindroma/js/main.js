// Chiedere all'utente di inserire una parola
const userWord = prompt('Inserisci una parola');

// Creare una funzione per capire se la parola inserita è palindroma
function isPalindrome(word) {

    // Inizializzo una variabile
    let wordReverse = '';

    for (i = 0; i < word.length; i++) {

        // Scorro ogni lettera della word
        const currentLetter = word[i];

        // Inserisco ogni lettera nella wordReverse, prima della variabile
        wordReverse = currentLetter + wordReverse;
    }

    // Se la parola è uguale alla parola al contrario
    if (word == wordReverse) {
        // Ritorna true ed esci dal ciclo
        return true;
    }

    // Altrimenti ritorna false
    return false;
}

// Se la funzione è true (quindi se la parola è palindroma)
if (isPalindrome(userWord) == true) {
    console.log('La parola è palindroma');
}
// Altrimenti se la funzione è false (quindi la parola NON è palindroma)
else {
    console.log('Non è palindroma');
}