/////////////BACK END LOGIC

function Player(firstName, score) {
  this.firstName = firstName;
  this.score = score;
};

Player.prototype.updateScore = function() {
  console.log(runningTotal);
  this.score = this.score + runningTotal
  console.log(this.score);
};

var player1
var player2
var runningTotal = 0

function roll(player) {
  var currentRoll = Math.floor((Math.random() * 6) + 1);
  $('#runningTotal').text(currentRoll);
  if (currentRoll === 1) {
    alert("Oh No!");
    pass(player, 0)
  } else {
    runningTotal = runningTotal + currentRoll;
  }
}

function pass(player, runningTotal) {
  player.updateScore();
  runningTotal = 0;
}


///////////////// FRONT END LOGIC
$(document).ready(function() {
  $('form#player-names').submit(function(event) {
    event.preventDefault();
    var player1Name = $('input#player1').val();
    var player2Name = $('input#player2').val();
    player1 = new Player(player1Name, 0);
    player2 = new Player(player2Name, 0);
    $(".player1Name").text(player1.firstName);
    $(".player2Name").text(player2.firstName);
  });

  $("#player1Roll").click(function() {
    roll(player1);
  });
  $("#player2Roll").click(function() {
    roll(player2);
  });
  $("#player1Pass").click(function() {
    pass(player1, runningTotal);
    $(".player1Score").text(player1.score);
  });
  $("#player2Pass").click(function() {
    pass(player2, runningTotal);
    $(".player2Score").text(player2.score);

  });


});
