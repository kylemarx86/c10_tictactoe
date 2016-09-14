//this sets up the game board with a 3x3 game only
$(document).ready(function(){
  create_game_board();
  player_make_move();
});


function create_game_board() {
  var game_board_size = 3;
  
  for (var a = 0; a<game_board_size; a++) {
    var row_one = $('<div>', {id: "row0"+" "+a}).text("index" + a).addClass('mark_spot');
    $('.game_board').append(row_one);
  }
  for (var b = 0; b<game_board_size; b++) {
    var row_two = $('<div>', {id: "row1"+" "+b}).text("index" + b).addClass('mark_spot');
    $('.game_board').append(row_two);
  }
  for (var c = 0; c<game_board_size; c++) {
    var row_three = $('<div>', {id: "row2"+" "+c}).text("index" + c).addClass('mark_spot');
    $('.game_board').append(row_three);
  }
}

function player_make_move(){
  $('.mark_spot').click(area_checked);
}

function area_checked(){
  console.log("Clicked");
}




//build board dynamically based on chosen board size (visually)
//build empty array to place markers in

//add a single marker to the game board (visually)
//add a single marker to the game array

//switch turn to the next player

//check for winning combinations

//end game: stop all movements, initiate end game screen

//retire from game: go to home screen