function arrayEqualTo(list = [], target) {
    return list.filter((value) => value != target).map((value) => value * value);
}

var arr = [3, 5, 1, 8, 9, 2, 3];

console.log(arrayEqualTo(arr, 5));