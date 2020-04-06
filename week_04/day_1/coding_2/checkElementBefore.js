function checkElementBefore(list = []) {
    var newArray = list.map(function(value, index) {
        if((index != 0) && (arr[index - 1] > arr[index])) {
            return -1;
        }
        else {
            return 1;
        }
    });

    return newArray;
}

var arr = [7, 5, 2, 1, 8, 9, 10, 6];

console.log(checkElementBefore(arr));