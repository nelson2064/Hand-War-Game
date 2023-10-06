
var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["../Resources/rock", "../Resources/paper", "../Resources/scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        // <img id="rock" src="rock.png">
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    //random for oppponent
    opponent = choices[Math.floor(Math.random() * 3)]; //0- .999999 * 3 = 0-2.99999
    document.getElementById("opponent-choice").src = opponent + ".png";

    //check for winner
    if (you == opponent) {
        yourScore += 1;
        opponentScore += 1;
    }
    else {
        if (you == "../Resources/rock") {
            if (opponent == "../Resources/scissors.png") {
                yourScore += 1;
            }
            else if (opponent == "../Resources/paper.png") {
                opponentScore += 1;
            }
        }
        else if (you == "../Resources/scissors") {
            if (opponent == "../Resources/paper") {
                yourScore += 1;
            }
            else if (opponent == "../Resources/rock") {
                opponentScore += 1;
            }
        }
        else if (you == "../Resources/paper") {
            if (opponent == "../Resources/rock") {
                yourScore += 1;
            }
            else if (opponent == "../Resources/scissors") {
                opponentScore += 1;
            }
        }
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
}