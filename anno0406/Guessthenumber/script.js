
var playagain = "y";

while (playagain == "y"){
    var check = 0;
    do {
        var randomNumber = Math.floor(Math.random()*10)+1;
        var guess = parseInt(prompt("Skriv en siffra mellan 1-10"));
        if (randomNumber == guess) {
            break;  }
        check++;
    }
    while (check < 3)

    if(check == 3){
        alert("Game over. Correct number was: " + randomNumber)
    }
    else {
        alert("Rätt gissat!!! U ROCK!!!")
    }

    playagain = prompt("Play again? y/n")
}


