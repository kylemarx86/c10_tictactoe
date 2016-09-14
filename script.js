//list of variables
var game_board_size = null;
var stored_game_data = null;

$(document).ready(function(){
    console.log('document has loaded');
    readyClickHandlers();
});

//readies the click handler events
function readyClickHandlers(){
    // $('div').cl
}




//set game board size
function set_game_board_size(size) {
    size_of_board = size;
}

//build board dynamically based on chosen board size (visually)

//choose random win_length - for boards larger than 3x3 (still should be run for 3x3)



//build empty array to place markers in
function create_empty_game(size_of_board) {
    stored_game_data = [];
    for(var rows = 0; rows < size_of_board; rows++){
        stored_game_data[rows] = [];
        for(var columns = 0; columns < size_of_board; columns++){
            stored_game_data[rows][columns] = null;
        }
    }
}

//add a single marker to the game board (visually)


//add a single marker to the game array


//switch turn to the next player


//check for winning combinations


//end game: stop all movements, initiate end game screen


//retire from game: go to home screen

