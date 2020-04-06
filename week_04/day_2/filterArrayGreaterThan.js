function filterArrayGreaterThan(list = [], target) {
    return list.filter(function(value) {
        return value < target;
    });
}

var arr = [3, 5, 2, 7, 1, 0];

console.log(filterArrayGreaterThan(arr, 3));