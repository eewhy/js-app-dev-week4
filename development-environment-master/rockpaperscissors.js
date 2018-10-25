hands = ['rock','scissors','paper'];

function getHand(){
  return hands[parseInt((Math.random() * 10) % 3)];
}

var player1 = {
  name: this.name,
  getHand: this.hand,
};

var player2 = {
  name: 'Computer',
  getHand: getHand,
};

var chris = {
  name: 'Chris',
  getHand: getHand,
};

var julie = {
  name: 'Julie',
  getHand: getHand,
};

player1.name = window.prompt("Type your name");

function greetOnLoad(){
    document.getElementById("greeting").innerHTML= "Hello " + player1.name.charAt(0).toUpperCase() + player1.name.slice(1) + ", it's nice to meet you!";
}

greetOnLoad();

function showGame(){
  var divElement = document.getElementById("gameSection")
  if (divElement.style.display === "block") {
        divElement.style.display = "none";
    } else {
        divElement.style.display = "block";
    }
}

var player1Score = 0;
var player2Score = 0;

var playRound = function(player1,player2){

  var player1Pick = window.prompt("Type your hand");
  var player2Pick = getHand();

  console.log(player1.name + ' picked ' + player1Pick);

  if(player1Pick=== player2Pick){
    document.getElementById("result").innerHTML= "It's a tie";
    console.log('it\'s a tie');

  } else if(
    player1Pick == 'rock' && player2Pick == 'scissors'
    ||
    player1Pick == 'scissors' && player2Pick == 'paper'
    ||
    player1Pick == 'paper' && player2Pick == 'rock'
    ){
    player1Score++;
    return console.log(player1.name + ' is the winner!');
    document.getElementById("winner").innerHTML= player2.name + " wins!";
  }else {
    player2Score++;
    return console.log(player2.name + ' is the winner!');
    document.getElementById("winner").innerHTML= player2.name + " wins!";
  }
};

var playGame = function(player1,player2,playUntil) {
  while(player1Score <= playUntil && player2Score <= playUntil){
      playRound(player1,player2);
   }

};

var start = playGame(player1,player2,2);

if (player1Score > player2Score) {
  //console.log(player1.name + ' is the final winner');
  document.getElementById("finalWinner").innerHTML= player1.name + " is the winner!"
}else {
  //console.log(player2.name + ' is the final winner')
  document.getElementById("finalWinner").innerHTML= player2.name + " is the winner!"
}
