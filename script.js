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
    let life = 5;
    let stock = document.createElement("p");
    stock.setAttribute("class", "myP");
    stock.innerHTML = "life remaining : " + life;
    document.getElementById("title").after(stock);
    // Etape 1 : récupérer un mot aléatoire dans un tableau.
    randomWords = guessWord[Math.floor(Math.random() * guessWord.length)];
    alert(randomWords);
    let arrayWord = randomWords.split("");
    let span;
    // Etape 2 : remplacer lettre par underscore 
    for (let i = 0; i < randomWords.length; i++) {
        secretWord.push('_');
        span = document.createElement("span");
        span.setAttribute("class", "myspan");
        span.innerText = secretWord[i];
        document.getElementById("letterWord").appendChild(span).style.letterSpacing = "10px";
    }
    // Etape 3 : Verifiez si la lettre est dans le tableau
    document.getElementById("lettre").addEventListener("input", function() {
        let lettre = document.getElementById("lettre");
        //let l = lettre.value;
        // console.log(l);
        console.log(typeof randomWords);

        // console.log(randomWords.indexOf(lettre.value));
        // doit return true si l'element recherche est dans la chaine.
        if (randomWords.indexOf(lettre.value) > -1 && lettre.value != "") {
            return console.log("ok");
        } else if (life > 0) {
            life = life - 1;
            stock.innerHTML = "life remaining : " + life;
            return console.log("life point :", life);
        } else if (life == 0) {
            alert("You lose ! Try it again");
            return location.reload();
        }



    });

    // Etape 4 : display letter match to word
    document.getElementById("btn").addEventListener("click", function() {
        let p = lettre.value;
        console.log(lettre.value);
        let s = document.querySelectorAll(".myspan");
        console.log(secretWord);
        console.log(arrayWord);
        for (let i = 0; i < randomWords.length; i++) {
            if (p === arrayWord[i]) {
                s[i].innerHTML = p;
                console.log(s[i]);
            }
            // Compare 2 tableau si ils sont egals afficher win 
            if (secretWord.equals([arrayWord])) {
                alert("win");
            }

        }


    });

















})();