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
  if (currentRoll === 1) {
    alert("Oh No!");
    runningTotal = 0;
  } else if ((player.score + runningTotal + currentRoll) >= 100) {
    alert("Winner!!!")
  } else {
    runningTotal = runningTotal + currentRoll;
  }
  $('#runningTotal').text(runningTotal);
}

function pass(player) {
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
    $("#player2Pass").hide();
    $("#player2Roll").hide();
    $("#player1Pass").show();
    $("#player1Roll").show();
  });
  $("#player2Roll").click(function() {
    roll(player2);
    $("#player1Pass").hide();
    $("#player1Roll").hide();
    $("#player2Pass").show();
    $("#player2Roll").show();
  });
  $("#player1Pass").click(function() {
    pass(player1);
    $("#player2Pass").hide();
    $("#player1Roll").hide();
    $("#player1Pass").show();
    $("#player2Roll").show();
    $(".player1Score").text(player1.score);
  });
  $("#player2Pass").click(function() {
    pass(player2);
    $("#player1Pass").hide();
    $("#player2Roll").hide();
    $("#player2Pass").show();
    $("#player1Roll").show();
    $(".player2Score").text(player2.score);

  });


});
