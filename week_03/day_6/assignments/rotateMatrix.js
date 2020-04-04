function transposeOppositeDigonal(matrix = [[]]) {

    var breadth = matrix[0].length;
    var length = matrix.length;
    var smallerEdge = (breadth < length) ? breadth : length;
    

    for(var x = 0; x < smallerEdge; x++) {

        for(var y = (smallerEdge - 1 - x); y >= 0; y--) {

            var temp = matrix[x][y];
            matrix[x][y] = matrix[smallerEdge - 1 - y][smallerEdge - 1 - x];
            matrix[smallerEdge - 1 - y][smallerEdge - 1 - x] = temp;

        }
    }

    // for remaining parts of the 2D Array with unequal lenght and breadth.
    if(length > breadth) {

        for(var row = 0; row < (length - breadth); row++) {
            for(y = (breadth - 1); y >= 0; y--) {
                matrix[breadth - 1 - y].unshift(matrix[breadth][y]);
            }
            matrix.splice(breadth, 1);
        }
    }
    else if(breadth > length) {
        var CIL = 0; // change in length.

        for(var column = 0; column < (breadth - length); column++) {

            var tempArray = [];
            for(var x = CIL; x < (length + CIL); x++) {
                tempArray.unshift(matrix[x].splice(length, 1)[0]);
            }
            matrix.unshift(tempArray);
            CIL++;
        }
    }
}

function rotateMatrix180Deg(matrix = [[]]) {

    var length = matrix.length;

    for(var row = 0; row < parseInt(length / 2); row++) {

        var tempArray = matrix[row];
        matrix[row] = matrix[length - 1 - row];
        matrix[length - 1 - row] = tempArray;
    }
}

function rotateMatrix90Deg(matrix = [[]]) {
    transposeOppositeDigonal(matrix);
    rotateMatrix180Deg(matrix);
}
var array = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30]
];

rotateMatrix90Deg(array);
console.log(array);