//create random number between 19-120
//each crystal is assigned a random number between 1-12
//when crystal is clicked on, it adds to previous number and displays in your number
//user can continue choosing gems/numbers until your number is greater than the random number
//if your number and random number equal: win
//if your number is larger than random number: loss
//for a win or loss, a tally is received, random number is regenerated, gem numbers are reassigned, your number goes back to 0

var targetNum = Math.floor(Math.random() * 102) + 19;
var yourNum = 0;
var blueGem = Math.floor(Math.random() * 12) + 1;
var greenGem = Math.floor(Math.random() * 12) + 1;
var orangeGem = Math.floor(Math.random() * 12) + 1;
var purpleGem = Math.floor(Math.random() * 12) + 1;
var wins = 0;
var losses = 0;

console.log(targetNum);
console.log(blueGem);
console.log(greenGem);
console.log(orangeGem);
console.log(purpleGem);

function reset(){
    targetNum = Math.floor(Math.random() * 102) + 19;
    yourNum = 0;
    blueGem = Math.floor(Math.random() * 12) + 1;
    greenGem = Math.floor(Math.random() * 12) + 1;
    orangeGem = Math.floor(Math.random() * 12) + 1;
    purpleGem = Math.floor(Math.random() * 12) + 1;
}

$("#targetNum").text(targetNum);

if (yourNum < targetNum) {

    $("#blue").on("click", function (event) {
        yourNum = yourNum + blueGem;
        $("#yourNum").text(yourNum);
    })
    
    $("#green").on("click", function (event) {
        yourNum = yourNum + greenGem;
        $("#yourNum").text(yourNum);
    })
    
    $("#orange").on("click", function (event) {
        yourNum = yourNum + orangeGem;
        $("#yourNum").text(yourNum);
    })
    
    $("#purple").on("click", function (event) {
        yourNum = yourNum + purpleGem;
        $("#yourNum").text(yourNum);
    })
} else if (yourNum === targetNum) {
    $("#wins").text(wins++);
    reset();
} else {
    $("#losses").text(losses++);
    reset();
}


