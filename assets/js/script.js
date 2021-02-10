(() => {


    const guessWord = [
        "pomme",
        "poire",
        "fraise",
        "javascript",
        "coder",
        "asynchronous"
    ];

    let gallery = [
        "img/0.jpg",
        "img/5.jpg",
        "img/6.jpg",
        "img/8.jpg",
        "img/10.jpg",

    ];

    let cpt = 0;



    // creation compteur 
    let life = 5;
    let stock = document.createElement("p");
    stock.setAttribute("class", "myP");
    stock.innerHTML = "life remaining : " + life;
    document.getElementById("title").after(stock);
    // Etape 1 : récupérer un mot aléatoire dans un tableau.
    randomWords = guessWord[Math.floor(Math.random() * guessWord.length)];
    let arrayWord = randomWords.split("");

    // Etape 2 : remplacer lettre par underscore 
    let span;
    for (let i = 0; i < randomWords.length; i++) {
        span = document.createElement("span");
        span.setAttribute("class", "myspan");
        span.innerText = "_";
        document.getElementById("letterWord").appendChild(span).style.letterSpacing = "10px";
    }
    // Etape 3 : Verifiez si la lettre est dans le tableau
    document.getElementById("lettre").addEventListener("input", function() {
        let lettre = document.getElementById("lettre");
        for (let i = 0; i < randomWords.length; i++) {
            if (randomWords.indexOf(lettre.value) > -1 && lettre.value != "") {
                return console.log("ok");
            } else if (life > 0) {
                life = life - 1;
                stock.innerHTML = "life remaining : " + life;
                return console.log("life point :", life);
            } else if (life == 0) {
                alert("Game over ! the word was : " + randomWords);
                return location.reload();
            }
        }

    });

    // Etape 4 : display letter match to word
    document.getElementById("btn").addEventListener("click", function() {
        let p = lettre.value;

        let s = document.querySelectorAll(".myspan");
        for (let i = 0; i < randomWords.length; i++) {
            if (p === arrayWord[i]) {
                s[i].innerHTML = p;
                cpt++;
                console.log(s);
                console.log(cpt, arrayWord.length);
                if (cpt == arrayWord.length) {
                    alert("win the word was : " + randomWords);
                    return location.reload();
                }
            }
        }

        // Image 

    });


    document.getElementById("btn").addEventListener("click", function() {
        let img = document.querySelector("img");
        let src = img.src;
        let cpt = 0;
        if (!arrayWord.includes(lettre)) {
            img.src = gallery[cpt];
            cpt++;
            console.log(gallery[cpt]);
        }






    });

})();