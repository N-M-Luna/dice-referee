//Javascript for the Dice Referee.


$(".roll-btn").click( function(){ rollDice()} );

//For every roll, this is what happens:
function rollDice() {
   
   //Step 0: Remove the current die faces
   $("#dice-player-1").removeClass($("#dice-player-1")[0].classList[3]);
   $("#dice-player-2").removeClass($("#dice-player-2")[0].classList[3]);
   
   //Step 1: Roll for each player (Pick two random numbers between 1 and 6)
   var rollPlayer1 = Math.ceil(Math.random() * 6) ;
   var rollPlayer2 = Math.ceil(Math.random() * 6) ;

   //Step 2: Change the default die-face from 6 to whatever each player rolled
   $("#dice-player-1").removeClass("fa-dice-six").addClass(diceIcon(rollPlayer1));
   $("#dice-player-2").removeClass("fa-dice-six").addClass(diceIcon(rollPlayer2));

   //Step 3: Change the heading to announce the winner
   if (rollPlayer1 > rollPlayer2) {
      $("h1").html("Player 1 wins!");
   }

   else if (rollPlayer2 > rollPlayer1) {
      $("h1").html("Player 2 wins!");
   }

   else if (rollPlayer2 == rollPlayer1) {
      $("h1").html("Draw!");
   }
   
   //Step 4: Now the user can roll again or refresh to change the players' names
   $(".roll-btn").html("Roll again");
   //$("#prompt-to-refresh").removeClass("hidden-element");
}

//Funtion input: an integer in [1,6]. Function output: class for the corresponding die icon.
   function diceIcon(num) {
      switch (num) {
         case 1:
            return "fa-dice-one";
            break;
        case 2:
            return "fa-dice-two";
            break;
         case 3:
            return "fa-dice-three";
            break;
         case 4:
            return "fa-dice-four";
            break;
         case 5:
            return "fa-dice-five";
            break;
         default:
            return "fa-dice-six";
            break;
      }
   }
