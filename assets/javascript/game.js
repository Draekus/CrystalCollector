var userScore = 0;
var winsValue = 0;
var loseValue = 0;
var computerValue = Math.floor((Math.random() *120) + 19)
// var gemValues =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var gemValue1 = Math.floor((Math.random() * 12) + 1)
var gemValue2 = Math.floor((Math.random() * 12) + 1)
var gemValue3 = Math.floor((Math.random() * 12) + 1)
var gemValue4 = Math.floor((Math.random() * 12) + 1)


$(document).ready(function() {

  

    // This function sets up all the conditions for a newgame including reseting appropriate values and getting new random digits
    function newGame(){
    userScore = 0;
    gemValue1 = Math.floor((Math.random() * 12) + 1)
    gemValue2 = Math.floor((Math.random() * 12) + 1)
    gemValue3 = Math.floor((Math.random() * 12) + 1)
    gemValue4 = Math.floor((Math.random() * 12) + 1)
    computerValue = Math.floor(Math.random() *120) + 19
    $("#goalscore").text("Goal: " + computerValue)
    $("#scoretext").text("Your Score: " + userScore)
    $("#losetext").text("Losses: " + loseValue)
    $("#winstext").text("Wins: " + winsValue)
    }


newGame()

// This function checks if the users score is at or over the the randomly generated number
function scoreCheck(){
    if (userScore === computerValue) {
        alert("You won!")
        winsValue++;
        $("#winstext").text("Wins: " + winsValue)
        newGame()
    }
    
    else if (userScore > computerValue) {
        alert("You lost!")
        loseValue++;
        $("#losetext").text("Losses: " + loseValue)
        newGame()
    }
}

// The following are event listeners on the images which add value to the users score and check for the win/lose condition

$("#gem1").click(function(){
    userScore += gemValue1;
    $("#scoretext").text("Your Score: " + userScore)
    scoreCheck()
    
});
$("#gem2").click(function(){
    userScore += gemValue2;
    $("#scoretext").text("Your Score: " + userScore)
    scoreCheck()

});
$("#gem3").click(function(){
    userScore += gemValue3;
    $("#scoretext").text("Your Score: " + userScore)
    scoreCheck()
});
$("#gem4").click(function(){
    userScore += gemValue4;
    $("#scoretext").text("Your Score: " + userScore)
    scoreCheck()
});




});

