
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


const newDiv = document.getElementById("box-target");
const gridButton = document.getElementById("grid-button");

gridButton.addEventListener("click", function () {

    for (let i = 1; i <= 100; i++) {
        const myCell = createCell(i);
        newDiv.append(myCell);
    }
});

function createCell(index) {

    const myCell = document.createElement("div");
    myCell.innerHTML = index;
    myCell.classList.add("classic__box");
    let myClass = "background";
    myCell.addEventListener("click", function () {

        myCell.classList.add(myClass);
        console.log("Hai cliccato il numero " + i);
    })

    return myCell;
};

// BONUS


const easyMode = document.getElementById("easy")
const mediuMode = document.getElementById("medium")
const hardMode = document.getElementById("hard")