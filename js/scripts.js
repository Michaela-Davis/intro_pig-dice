/////////////BACK END LOGIC

function Player(firstName, score, playerID) {
  this.firstName = firstName;
  this.score = score;
  this.playerID = playerID;
};

Player.prototype.updateScore = function() {
  this.score = this.score + runningTotal
};

var player1
var player2
var runningTotal = 0

function roll(player) {
  if (player.playerID === 'player1') {
    $("#player2Pass").hide();
    $("#player2Roll").hide();
    $("#player1Pass").show();
    $("#player1Roll").show();
  } else {
    $("#player1Pass").hide();
    $("#player1Roll").hide();
    $("#player2Pass").show();
    $("#player2Roll").show();
  }

  var currentRoll = Math.floor((Math.random() * 6) + 1);
  if (currentRoll === 1) {
    alert("Oh No!");
    runningTotal = 0;
    $("#player2Roll").hide();
    $("#player1Roll").hide();

  } else if ((player.score + runningTotal + currentRoll) >= 100) {
    alert("Winner!!!")
    runningTotal = runningTotal + currentRoll;
    player.updateScore();
    $(".row").hide();
    $("#trophy").show();
    $("#winner").show();
    $('#winner').text(player.firstName);
    setTimeout(location.reload.bind(location), 5000);

  } else {
    runningTotal = runningTotal + currentRoll;
  }
  $('#runningTotal').text(runningTotal);
}

function pass(player) {
  if (player.playerID === 'player1') {
    $("#player1Pass").hide();
    $("#player1Roll").hide();
    $("#player2Pass").show();
    $("#player2Roll").show();
    player.updateScore();
    runningTotal = 0;
    $(".player1Score").text(player1.score);
    $('#runningTotal').text('0');
  } else {
    $("#player2Pass").hide();
    $("#player2Roll").hide();
    $("#player1Pass").show();
    $("#player1Roll").show();
    player.updateScore();
    runningTotal = 0;
    $(".player2Score").text(player2.score);
    $('#runningTotal').text('0');
  }
}


///////////////// FRONT END LOGIC
$(document).ready(function() {
  $('form#player-names').submit(function(event) {
    event.preventDefault();
    var player1Name = $('input#player1').val();
    var player2Name = $('input#player2').val();
    player1 = new Player(player1Name, 0, 'player1');
    player2 = new Player(player2Name, 0, 'player2');
    $(".player1Name").text(player1.firstName);
    $(".player2Name").text(player2.firstName);
    $("form").hide();
  });

  $("#player1Roll").click(function() {
    roll(player1);
  });

  $("#player2Roll").click(function() {
    roll(player2);
  });

  $("#player1Pass").click(function() {
    pass(player1);
  });
  $("#player2Pass").click(function() {
    pass(player2);
  });
});
