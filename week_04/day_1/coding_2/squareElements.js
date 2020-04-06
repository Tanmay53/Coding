function squareElements(list = []) {
    var squaredArray = list.map(function(value) {
        return (value * value);
    });

    return squaredArray;
}

var arr = [4, 7, 9, 10, 13, 50];
console.log(squareElements(arr));