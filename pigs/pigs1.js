let playerTurn=0; 
let player0= {currentScore: 0, totalScore: 0};
let player1= {currentScore: 0, totalScore: 0};
let player2= {currentScore: 0, totalScore: 0};
let player3= {currentScore: 0, totalScore: 0};
let players = [player0, player1, player2, player3];
let winScore = 100;

setUpGame(); 

function handleClick(id) {
    console.log(id); 
    if (id.includes('Pass')) {
        handlePass();
    }
    else if (id.includes('Roll')) {
        handleRoll();
    } else if (id.includes('replayButton')) {
        handleReplay();
    }
}

function handleRoll() {
    let pig1 = rollPig();
    let pig2 = rollPig();
    let roll = scorePigs(pig1, pig2);
    document.getElementById('player'+ playerTurn + 'Pig1').innerHTML = pig1;
    document.getElementById('player'+ playerTurn + 'Pig2').innerHTML = pig2;
    if (roll==0) {
        pigOut();
    } else {
        changeCurrentScore(roll);
    }
    if (players[playerTurn].currentScore + players[playerTurn].totalScore >= winScore) {
        handleWin();
    }
}

function handlePass() {
    getTotalScore();
    if (playerTurn < 3) {
        playerTurn = playerTurn + 1;
    }
    else {
        playerTurn = 0;
    }
    disableButtons();
    document.getElementById('player' + playerTurn + 'PassButton').disabled = false;
    document.getElementById('player' + playerTurn + 'RollButton').disabled = false;
    changeBackground();
    players[playerTurn].currentScore= 0;

    console.log('its is player ' + playerTurn + '\'s turn');
}

function rollPig() {
    roll= Math.random();
    let answer 
    console.log(roll);
    if (roll <= 0.394) {
        answer= 'Dot';
    } else if (roll <= 0.651) {
        answer= 'No Dot';
    } else if (roll <= 0.875) {
        answer= 'Razorback';
    } else if (roll <= 0.963) {
        answer= 'Trotter';
    } else if (roll <= 0.993) {
        answer= 'Snouter';
    } else {
        answer= 'Leaning Jowler';
    } 
    return answer;
}

function disableButtons() {
    let buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

function changeBackground() {
    for (let i=0; i<=3; i++) {
        document.getElementById('player' + i).className = 'w3-card w3-container w3-light-gray w3-round-large';
    }
    document.getElementById('player' + playerTurn).className = 'w3-card w3-container w3-dark-gray w3-round-large';
}

function setUpGame() {
    disableButtons();
    document.getElementById('player' + playerTurn + 'PassButton').disabled = false;
    document.getElementById('player' + playerTurn + 'RollButton').disabled = false;
}

function scorePigs(pig1, pig2) {
    let currentScore = 0
    if (pig1 == pig2) {
        if (pig2 == 'Dot' || pig2 == 'No Dot') {
            return 1
        } else if (pig2 == 'Razorback' || pig2 == 'Trotter') {
            return 20
        } else if (pig2 == 'Snouter') {
            return 40
        } else if (pig2 == 'Leaning Jowler') {
            return 60
        }
    }
    if (pig1 == 'Razorback' || pig2 == 'Razorback') {
        currentScore =  currentScore + 5
    }
    if (pig1 == 'Trotter' || pig2 == 'Trotter') {
        currentScore = currentScore + 5
    }
    if (pig1 == 'Snouter' || pig2 == 'Snouter') {
        currentScore = currentScore + 10
    }
    if (pig1 == 'Leaning Jowler' || pig2 == 'Leaning Jowler') {
        currentScore = currentScore + 15
    }
    return currentScore;
    //console.log('the current score is '+ currentScore);
}

function changeCurrentScore(rollScore) {
    if (playerTurn == 0) {
        player0.currentScore = player0.currentScore + rollScore;
        document.getElementById('player' + playerTurn + 'HandScore').innerHTML = 'Score: ' + player0.currentScore;
        console.log('Player ' + playerTurn + '\'s score is ' + player0.currentScore);
    }
    else if (playerTurn == 1) {
        player1.currentScore = player1.currentScore + rollScore;
        document.getElementById('player' + playerTurn + 'HandScore').innerHTML = 'Score: ' + player1.currentScore;
        console.log('Player ' + playerTurn + '\'s score is ' + player1.currentScore);
    }
    else if (playerTurn == 2) {
        player2.currentScore = player2.currentScore + rollScore;
        document.getElementById('player' + playerTurn + 'HandScore').innerHTML = 'Score: ' + player2.currentScore;
        console.log('Player ' + playerTurn + '\'s score is ' + player0.currentScore);
    }
    else if (playerTurn == 3) {
        player3.currentScore = player3.currentScore + rollScore;
        document.getElementById('player' + playerTurn + 'HandScore').innerHTML = 'Score: ' + player3.currentScore;
        console.log('Player ' + playerTurn + '\'s score is ' + player3.currentScore);
    }
}

function pigOut() {
    players[playerTurn].currentScore= 0;
    document.getElementById('player' + playerTurn + 'HandScore').innerHTML = 'PIG OUT';
    console.log('pig out!!!');
    handlePass();
}

function getTotalScore() {
    players[playerTurn].totalScore = players[playerTurn].totalScore + players[playerTurn].currentScore;
    console.log('the players total score is ' + players[playerTurn].totalScore);
    document.getElementById('player'+ playerTurn + 'TotalScore').innerHTML = 'Total score: ' + players[playerTurn].totalScore;

}

function disableAllButtons() {
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.disabled = true;
    }
}

function resetGame() {
    disableButtons();
    location.reload();
}

function handleReplay() {
    document.getElementById('replay').className = "w3-row w3-container w3-show";
    document.getElementById('replayButton').disabled = false;
    document.getElementById('replayButton').onclick = function() {resetGame()};
    }

function handleWin() {
    console.log('You won!');
    document.getElementById('player' + playerTurn).className = 'w3-card w3-container w3-yellow w3-round-large';
    disableAllButtons();
    handleReplay();
}