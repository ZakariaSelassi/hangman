(() => {


    const guessWord = [
        "Pomme",
        "Poire",
        "Fraise",
        "Javascript",
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

    let lettre;

    if (randomWords.indexOf(lettre)) {
        return true;
    } else {
        console.log("Erreur");
    }
    document.getElementById("letter").addEventListener("input", function() {
        let input = document.getElementById("letter").value;
        console.log(input.value);
    });





})();