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
    let cpt2 = 0;
    // creation compteur 
    let life = 6;
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
    document.getElementById("btn").addEventListener("click", () => myfunction());

    function myfunction() {
        let p = lettre.value;

        let s = document.querySelectorAll(".myspan");
        for (let i = 0; i < randomWords.length; i++) {
            if (p === arrayWord[i]) {
                s[i].innerHTML = p;
                cpt++;

                console.log(cpt, arrayWord.length);
                if (cpt == arrayWord.length) {
                    alert("win the word was : " + randomWords);
                    return location.reload();
                }
            }
        }
        if (randomWords.indexOf(lettre.value) > -1 && lettre.value != "") {
            return console.log("ok");
        } else {
            let img = document.querySelector("img");
            img.src = gallery[cpt2];
            cpt2++;
            life = life - 1;
            stock.innerHTML = "life remaining : " + life;
        }
        if (life === 0) {
            alert("Game over ! the word was : " + randomWords);
            return location.reload();
        }
    }


})();