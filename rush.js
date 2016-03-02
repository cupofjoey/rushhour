/* var boardString = "111000203444203RR567780560089ABBB89A"

var convertToBoard = function(input) {
    if(input.length === 36 && typeof input === 'string') {
       
for (var i = 0; i < 6; i++) {
    var row = boardString.slice(0, 6)
    var numArray = []
    boardString = boardString.replace(row, '');
    for (var j = 0; j < row.length; j++) {
        numArray.push(row[j]);
            }
         }
     }

};
*/

var exampleString = "111000203444203RR567780560089ABBB89A"

var stringToBoard = function(inputString) {
  var boardObject = {
    "board": []
  }
  for(var i = 0; i < 6; i++) {
    var rowArray = []
    var row = inputString.slice(0,6);
    inputString = inputString.replace(row, "");
    for(var j = 0; j < 6; j++) {
      rowArray.push(row[j]);
    }
    boardObject.board.push(rowArray);
  }  
  return boardObject
}

console.log(stringToBoard(exampleString));



var myTestBoard = {
    "board": [
  [ '1', '1', '1', '0', '0', '0' ],                                                                                                                                                       
  [ '2', '0', '3', '4', '4', '4' ],                                                                                                                                                       
  [ '2', '0', '3', 'R', 'R', '5' ],                                                                                                                                                       
  [ '6', '7', '7', '8', '0', '5' ],                                                                                                                                                       
  [ '6', '0', '0', '8', '9', 'A' ],                                                                                                                                                       
  [ 'B', 'B', 'B', '8', '9', 'A' ]
        ]
};


var boardToString = function(boardObject) {
    var mushedArray = [];
    for (var i = 0; i < 6; i++) {
        var boardValue = boardObject.board;
        var row = boardValue[i]; //[0, 1, 2, 3, 4, 5,]
        mushedArray = mushedArray.concat(row);
    }
    
    return mushedArray.join("");
};
 var answer = boardToString(myTestBoard);
 
 console.log(answer);

