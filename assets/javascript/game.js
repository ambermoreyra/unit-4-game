//create random number between 19-120
//each crystal is assigned a random number between 1-12
//when crystal is clicked on, it adds to previous number and displays in your number
//user can continue choosing gems/numbers until your number is greater than the random number
//if your number and random number equal: win
//if your number is larger than random number: loss
//for a win or loss, a tally is received, random number is regenerated, gem numbers are reassigned, your number goes back to 0

//object with score value, image, color

//global variables

//array of crystals to loop through, assign a value for each crystal

//random number function

//click event function
//make a class for all buttons


//reset game
    //clear variables



var yourNum = 0;
var wins = 0;
var losses = 0;
var crystals = ["assets/images/blue_diamond.png", "assets/images/green_circle.jpg", "assets/images/orange_gem.png", "assets/images/purple_gem.jpg"]    

function value () {return Math.floor(Math.random() * 12) + 1
};

letsGo();

function letsGo (){
    var targetNum = Math.floor(Math.random() * 102) + 19;
    $("#targetNum").text(targetNum);
 
for (var i = 0; i < crystals.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", crystals[i]);
    imageCrystal.attr("data-value", value());
    $(".crystals").append(imageCrystal);
  }

  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-value"));
    crystalValue = parseInt(crystalValue);
    yourNum += crystalValue;

    $("#yourNum").text(yourNum);   
    
    if (yourNum === targetNum) {
      wins += 1;
      $("#wins").text(wins);
      reset();
    }

    else if (yourNum > targetNum) {
      losses += 1;
      $("#losses").text(losses);
      reset();
    }

  });

  function reset(){
      $("#targetNum, #yourNum, .crystals").empty();
      yourNum = 0;
      $("#yourNum").text(yourNum);  
      letsGo();
    }

    
  }
