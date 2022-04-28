let player0 = {currentScore: 0, totalScore: 0};
let player1 = {currentScore: 0, totalScore: 0};
let player2 = {currentScore: 0, totalScore: 0};
let player3 = {currentScore: 0, totalScore: 0};
let players = [player0, player1, player2, player3];
let winScore = 50;

setUp()

let currentPlayer = 0;

function handleClick(id) {
    if (id == "player0PassButton") { // declares when the player passes or rolls to keep track
        console.log("Player 0 passed");
        handlePass("player0", "player1");
    } else if (id == "player1PassButton") {
        console.log("Player 1 Passed")
        handlePass("player1", "player2");
    } else if (id == "player2PassButton") {
        console.log("Player 2 Passed")
        handlePass("player2", "player3");
    } else if (id == "player3PassButton") {
        console.log("Player 3 Passed")
        handlePass("player3", "player0");
    } else if (id == "player0RollButton") {
        handleRoll(currentPlayer);
    } else if (id == "player1RollButton") {
        handleRoll(currentPlayer);
    } else if (id == "player2RollButton") {
        handleRoll(currentPlayer);
    } else if (id == "player3RollButton") {
        handleRoll(currentPlayer);
    }

}

function handlePass() {
    getTotalScore();
    if (currentPlayer < 3) { //move to the next turn
        currentPlayer = currentPlayer + 1;
    }
    else {
        currentPlayer = 0;
    }
    disableB();
    document.getElementById("player" + currentPlayer + "PassButton").disabled = false
    document.getElementById('player' + currentPlayer + "RollButton").disabled = false;
    changeBackground();
    players[currentPlayer].currentScore = 0;
// current score is now 0 since that player is passing - current score + total score at end of turn
    console.log("it is player " + currentPlayer + "\'s turn")
}


function handleRoll() {
    let pig1 = rollPig(); //rolling 0-1
    let pig2 = rollPig();
    let roll = scorePigs(pig1, pig2);// score of whatever pig 1 and pig 2 is
    document.getElementById('player' + currentPlayer + 'Pig1').innerHTML = pig1; // setting players pig to whatever number was roll
    document.getElementById('player' + currentPlayer + 'Pig2').innerHTML = pig2;
    if (roll == 0) {
        pigOut();
    } else {
        changeCurrentScore(roll);
    }
    if (players[currentPlayer].currentScore + players[currentPlayer].totalScore >= winScore) {
        letWin();
    }
}

function rollPig() {
    roll = Math.random()
    let answer;
    console.log(roll)
    if (roll <= 0.383) { //lowest to highest
        answer = "Dot";
    } else if (roll <= 0.670) {
        answer = "No Dot";
    } else if (roll <= 0.869) {
        answer = "Razorback";
    } else if (roll <= 0.960) {
        answer = "Trotter";
    } else if (roll <= 0.991) {
        answer = "Snouter";
    } else {
        answer = "Leaning Jowler";
    }
    return answer;
}

function letWin() {
    console.log("You won!");
    document.getElementById("player" + currentPlayer).className = "w3-card w3-container w3-yellow w3-round-large";
    disableAllButtons();
    handleReplay();
}

function scorePigs(pig1, pig2) {
    let currentScore = 0
    if (pig1 == pig2) {
        if (pig2 == "Dot" || pig2 == "No Dot") {
            return 1
        } else if (pig2 == "Razorback" || pig2 == "Trotter") {
            return 20
        } else if (pig2 == "Snouter") {
            return 40
        } else if (pig2 == "Leaning Jowler") {
            return 60
        }
    }
    if (pig1 == "Razorback" || pig2 == "Razorback") {
        currentScore = currentScore + 5
    }
    if (pig1 == "Trotter" || pig2 == "Trotter") {
        currentScore = currentScore + 5
    }
    if (pig1 == "Snouter" || pig2 == "Snouter") {
        currentScore = currentScore + 10
    }
    if (pig1 == "Leaning Jowler" || pig2 == "Leaning Jowler") {
        currentScore = currentScore + 15
    }
    return currentScore;
}

function changeCurrentScore(rollScore) { // adding all the rolls as the turn is still active
    if (currentPlayer == 0) {
        player0.currentScore = player0.currentScore + rollScore;
        document.getElementById('player' + currentPlayer + 'HandScore').innerHTML = 'Score: ' + player0.currentScore;
        console.log('Player ' + currentPlayer + '\'s score is ' + player0.currentScore);
    }
    else if (currentPlayer == 1) {
        player1.currentScore = player1.currentScore + rollScore;
        document.getElementById('player' + currentPlayer + 'HandScore').innerHTML = 'Score: ' + player1.currentScore;
        console.log('Player ' + currentPlayer + '\'s score is ' + player1.currentScore);
    }
    else if (currentPlayer == 2) {
        player2.currentScore = player2.currentScore + rollScore;
        document.getElementById('player' + currentPlayer + 'HandScore').innerHTML = 'Score: ' + player2.currentScore;
        console.log('Player ' + currentPlayer + '\'s score is ' + player0.currentScore);
    }
    else if (currentPlayer == 3) {
        player3.currentScore = player3.currentScore + rollScore;
        document.getElementById('player' + currentPlayer + 'HandScore').innerHTML = 'Score: ' + player3.currentScore;
        console.log('Player ' + currentPlayer + '\'s score is ' + player3.currentScore);
    }
}

function pigOut() {
    players[currentPlayer].currentScore = 0;
    document.getElementById('player' + currentPlayer + 'HandScore').innerHTML = 'PIG OUT';
    console.log('PIG OUT!');
    handlePass();
}

function getTotalScore() {
    players[currentPlayer].totalScore = players[currentPlayer].totalScore + players[currentPlayer].currentScore;
    console.log("The players total score is " + players[currentPlayer].totalScore);
    document.getElementById("player" + currentPlayer + "TotalScore").innerHtml = "Total Score: " + players[currentPlayer].totalScore;
}

function disableB() {
    let buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

function disableAllButtons() {
    let buttons = getElementsByTagName("button");
    for (let button of buttons) {
        button.disabled = true;
    }
}

function changeBackground() {
    for (let i = 0; i <= 3; i++) {
        document.getElementById("player" + i).className = "w3-card w3-container w3-light-gray w3-round-large";
    }
    document.getElementById("player" + currentPlayer).className = "w3-card w3-container w3-dark-gray w3-round-large";
}

function setUp() {
    disableB();
    document.getElementById("player" + currentPlayer + "PassButton").disabled = false;
    document.getElementById("player" + currentPlayer + "RollButton").disabled = false;
}

function resetGame() {
    disableB();
    location.reload();
}

function handleReplay() { //got from internet but forget the source
    document.getElementById("replay").className = "w3-row w3-container w3-show";
    document.getElementById("replayButton").disabled = false;
    document.getElementById("replayButton").onclick = function () { resetGame() };
}