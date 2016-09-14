//list of variables
var game_board_size = null;
var stored_game_data = null;


$(document).ready(function(){
  create_game_board();
  player_make_move();
});

function create_game_board() {
  var game_board_size = 3;
    create_empty_game(3);
  
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

//set game board size
function set_game_board_size(size) {
    size_of_board = size;
}

//build board dynamically based on chosen board size (visually)

//choose random win_length - for boards larger than 3x3

function num_of_winning_matches_needed() {
    //3 board size variables (booleans) created to test this function
    //var board_20 isn't actually needed, as it would be caught by the "else" statement
    var board_3 = false;
    var board_9 = true;
    var board_20 = false;
    //if board is 3x3, # of matches needed to win will be 3
    if (board_3) {
        var winning_matches_3_board = 3;
        console.log("number of matches needed for 3x3 board: "+winning_matches_3_board);
        return winning_matches_3_board;
    }
    //if board is 9x9
    //Math.Random gives random # from 0 - .9999[...]
    // Math.floor gives whole number, *3 + 3 multiplies whole number by 6 and adds 3 (minimum # of matches needed are 3).
    else if (board_9) {
        var winning_matches_9_board = Math.floor(Math.random() * 6 + 4);
        console.log("number of matches needed for 9x9 board: "+winning_matches_9_board);
        return winning_matches_9_board;
    }
    //else if board is 20x20
    //Math.Random gives random # from 0 - .9999[...]
    // Math.floor gives whole number, *17 + 3 multiplies whole number by 17 and adds 3 (minimum # of matches needed are 3).
    else {
        var winning_matches_20_board = Math.floor(Math.random() * 17 + 4);
        console.log("number of matches needed for 3x3 board: "+winning_matches_20_board);
        return winning_matches_20_board;
    }
}
//calling the winning matches needed function:
num_of_winning_matches_needed();


//build empty array to place markers in
function create_empty_game(size_of_board) {
    stored_game_data = [];
    for (var row = 0; row < size_of_board; row++) {
        stored_game_data[row] = [];
        for (var columns = 0; columns < size_of_board; columns++) {
            stored_game_data[row][columns] = null;
        }
    }
}

//add a single marker to the game board (visually)


//add a single marker to the game array


//switch turn to the next player


//check for winning combinations


//end game: stop all movements, initiate end game screen


//retire from game: go to home screen