(() => {


    const guessWord = [
        "pomme",
        "poire",
        "fraise",
        "javascript",
        "coder",
        "asynchronous"
    ];

    let secretWord = [];
    // Etape 1 : récupérer un mot aléatoire dans un tableau.
    randomWords = guessWord[Math.floor(Math.random() * guessWord.length)];
    alert(randomWords);

    // Etape 2 : remplacer lettre par underscore 
    for (let i = 0; i < randomWords.length; i++) {
        //secretWord.push('_');
        let span = document.createElement("span");
        span.setAttribute("class", "myspan");
        span.innerText = "_";
        document.getElementById("letterWord").appendChild(span).style.letterSpacing = "10px";
    }
    // Etape 3 : Verifiez si la lettre est dans le tableau
    // checks if letter matches one or more of letters in the word javascript
    document.getElementById("lettre").addEventListener("input", function() {
        let lettre = document.getElementById("lettre");
        //let l = lettre.value;
        // console.log(l);
        console.log(typeof randomWords);

        // console.log(randomWords.indexOf(lettre.value));
        // doit return true si l'element recherche est dans la chaine.
        if (randomWords.indexOf(lettre.value) > -1 && lettre.value != "") {
            return console.log("ok");
        } else {
            return console.log("wrong letter ");
        }
    });









})();