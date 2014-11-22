function new_game() {
}

function make_move() {
  var board = get_board();
  var x = get_my_x();
  var y = get_my_y();
  var searching;

  // we found an item! take it!
  if (board[x][y] > 0) {
    return TAKE;
  }

  var move = bot.move_to(x, y, board);

  console.log("Moving to "+move);
  // If moving is undefined, move north or south to try to get parallel to fruit
  if(move){
    searching = 0;
    return move;
  } else {
    var to_top = 0;
    console.log("Could not find move! Moving north or south");
    searching++;
    if(to_top === 0 && y-1 > 0){
      return NORTH;
    } else if (to_top === 0 && y-1 === 0){
      to_to = 1;
      return SOUTH;
    } else {
      return SOUTH;
    }
  }
  return PASS;
}

var FruitBot = function(){}

FruitBot.prototype = {
move_to: function (x, y, board){
           //Spiral outwards to find "closest" fruit
           for(i = 1; i<HEIGHT-1 && i < WIDTH-1; i++){
             // If we aren't about to go off the top of the board and there's a fruit...
             if (y - i >= 0 && board[x][y-i] > 0) {
               return NORTH;
             } 
             // If we aren't about to go off the board to the East and there's a fruit...
             if (x + i < WIDTH-1 && board[x+i][y] > 0) {
               return EAST;
             }
             if (x - i >= 0 && board[x-i][y] > 0) {
               return WEST;
             }
             if (y + i < HEIGHT-1 && board[x][y+i] > 0) {
               return SOUTH;
             }
           }
         }
}

var bot = new FruitBot();    
