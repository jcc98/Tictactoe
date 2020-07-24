const twoPlayer = document.getElementById("two-player");
const againstCPU = document.getElementById("cpu");
const gameArray = [];
let playerTurn = 1;
let one, two, three, four, fix, six;
let playerSymbol = "x"; 
let status = [];
let playerMessage = document.getElementById("player-turn");
one = document.getElementById("one");
two = document.getElementById("two");
three = document.getElementById("three");
four = document.getElementById("four");
five = document.getElementById("five");
six = document.getElementById("six");

// Event listeners

function game() {
    if (gameArray.length < 9) {
        if (playerTurn === 0) {
            playerSymbol = "x";
            playerMessage.innerText = "Player 1's turn";
            playerTurn = 1;
        } else {
            playerSymbol = "o";
            playerMessage.innerText = "Player 2's turn";
            playerTurn = 0;
        }


        if (one.innerText === two.innerText && two.innerText === three.innerText && one.innerText !== "") {
            if (one.innerText === "x") {
                alert("Player 1 won");
            } else { 
                alert("Player 2 won");
            }
            clearBoard();
            

        }
        if (four.innerText === five.innerText && five.innerText === six.innerText && four.innerText !== "") {
            if (four.innerText === "x") {
                alert("Player 1 won");
            } else { 
                alert("Player 2 won");
            }
            clearBoard();
        }
        if (seven.innerText === eight.innerText && eight.innerText === nine.innerText && seven.innerText !== "") {
            if (seven.innerText === "x") {
                alert("Player 1 won");
            } else { 
                alert("Player 2 won");
            }
            clearBoard();
        }
        if (two.innerText === five.innerText && five.innerText === eight.innerText && two.innerText !== "") {
            if (two.innerText === "x") {
                alert("Player 1 won");
            } else { 
                alert("Player 2 won");
            }
            clearBoard();
        }
        if (one.innerText === four.innerText && four.innerText === seven.innerText && one.innerText !== "") {
            if (one.innerText === "x") {
                alert("Player 1 won");
            } else { 
                alert("Player 2 won");
            }
            clearBoard();
        }
        if (three.innerText === six.innerText && six.innerText === nine.innerText && three.innerText !== "") {
            if (three.innerText === "x") {
                alert("Player 1 won");
            } else { 
                alert("Player 2 won");
            }
            clearBoard();
        }
        if (one.innerText === five.innerText && five.innerText === nine.innerText && one.innerText !== "") {
            if (one.innerText === "x") {
                alert("Player 1 won");
            } else { 
                alert("Player 2 won");
            }
            clearBoard();
        }
        if (three.innerText === five.innerText && five.innerText === seven.innerText && three.innerText !== "") {
            if (three.innerText === "x") {
                alert("Player 1 won");
            } else { 
                alert("Player 2 won");
            }
            clearBoard();
        }

    } 
}

function clearBoard() {
    one.innerText = "";
    two.innerText = "";
    three.innerText = "";
    four.innerText = "";
    five.innerText = "";
    six.innerText = "";
    seven.innerText = "";
    eight.innerText = "";
    nine.innerText = "";
    location.reload();
}


one.addEventListener("click", () => {
    if (one.innerText === "") {
    one.innerText = playerSymbol;
    gameArray.push(playerSymbol);
    game();
}
});

two.addEventListener("click", () => {
    if (two.innerText === "") {
        
        two.innerText = playerSymbol;
        gameArray.push(playerSymbol);
        game();
}
});

three.addEventListener("click", () => {
    if (three.innerText === "") {
        
        three.innerText = playerSymbol;
        gameArray.push(playerSymbol);
        game();
}
});

four.addEventListener("click", () => {
    if (four.innerText === "") {
        
        four.innerText = playerSymbol;
        gameArray.push(playerSymbol);
        game();
}
});

five.addEventListener("click", () => {
    if (five.innerText === "") {
        
        five.innerText = playerSymbol;
        gameArray.push(playerSymbol);
        game();
}
});

six.addEventListener("click", () => {
    if (six.innerText === "") {
        
        six.innerText = playerSymbol;
        gameArray.push(playerSymbol);
        game();
}
});

seven.addEventListener("click", () => {
    if (seven.innerText === "") {
        
        seven.innerText = playerSymbol;
        gameArray.push(playerSymbol);
        game();
}
});

eight.addEventListener("click", () => {
    if (eight.innerText === "") {
        
        eight.innerText = playerSymbol;
        gameArray.push(playerSymbol);
        game();
}
});

nine.addEventListener("click", () => {
    if (nine.innerText === "") {
        
        nine.innerText = playerSymbol;
        gameArray.push(playerSymbol);
        game();
}
});

gameArray["x", "x", "x",
          "x", "x", "x",
          "x", "x", "x"];

