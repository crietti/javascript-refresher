let currentPlayer = 0
let nextPlayer = 1
function handleClick(id) {
    if (id == "player0PassButton") { // DISABLE BUTTONS
        console.log("Player 0 passed");
        switchColor("player0", "player1");
    } else if (id == "player1PassButton") {
        console.log("Player 1 Passed")
        switchColor("player1", "player2");
    } else if (id == "player2PassButton") {
        console.log("Player 2 Passed")
        switchColor("player2", "player3");
    } else if (id == "player3PassButton") {
        console.log("Player 3 Passed")
        switchColor("player3", "player0");
    } 

}

function switchColor(currentPlayer, nextPlayer) {
    let currentPlayerCard = document.getElementById(currentPlayer);
    let nextPlayerCard = document.getElementById(nextPlayer);
    currentPlayerCard.setAttribute("class", "w3-card w3-container w3-light-gray w3-round-large")
    nextPlayerCard.setAttribute("class", "w3-card w3-container w3-dark-gray w3-round-large")
}