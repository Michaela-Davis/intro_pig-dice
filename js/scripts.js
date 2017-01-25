/////////////BACK END LOGIC

function Player(firstName, score) {
  this.firstName = firstName;
  this.score = score;
};

Player.prototype.pass = function() {
  this.score = this.score + runningTotal
};

var player1
var player2





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
});
