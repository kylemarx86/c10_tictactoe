//list of variables
var game_board_size = null;
var stored_game_data = null;
var its_player_ones_turn = null;

$(document).ready(function(){
  create_game_board();
  player_make_move();
});

function create_game_board() {
    // game_board_size = 3;        //temporarily hard set game_board_size
    size_of_board = 5;          //temporarily hard set to 3
    stored_game_data = [];      //reset stored_game_data to blank array
    its_player_ones_turn = true;        //at start of the game player one will start

    for (var row = 0; row < size_of_board; row++) {         //run through the rows from row 0 through the end of the game board
        stored_game_data[row] = [];         //create empty row of game data
        var row_of_divs = $('<div>');       //create a dom element of a row for cells to go into

        for (var column = 0; column < size_of_board; column++) {     //run through the columns from column 0 through the length of the game board
            stored_game_data[row][column] = null;      //create the empty cell in the array

            var cell = $('<div>').addClass('cell').attr('row',row).attr('column', column).addClass('mark_spot');      //create the cell DOM element with attributes row and column
            row_of_divs.append(cell);       //append the cell to the row
        }
        $('.game_board').append(row_of_divs);      //append the row to the game board
    }
}

function player_make_move(){
  $('.mark_spot').click(area_checked);
}

function area_checked(){
  console.log("Clicked");
    var row = $(this).attr('row');
    var column = $(this).attr('column');

    console.log('row', row);
    console.log('column', column);

    if(stored_game_data[row][column] === null){     //check to see if the clicked cell is null/empty
        if(its_player_ones_turn){
            stored_game_data[row][column] = 1;    //if it is player ones turn put a one in the given cell of the game array
        }else {
            stored_game_data[row][column] = 2;       //if it is player twos turn put a 2 in the given cell of the game array
        }
        its_player_ones_turn = !its_player_ones_turn;       //if the person made a legitimate move then the players turn will switch
    }else {
        console.log('spot taken');      //not sure we need this case //leave it just in case there is something to account for
    }

    console.log(stored_game_data);
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

}



//add a single marker to the game board (visually)
function addMarkerToBoard(){

}

//add a single marker to the game array


//


//switch turn to the next player


//check for winning combinations


//end game: stop all movements, initiate end game screen


//retire from game: go to home screen