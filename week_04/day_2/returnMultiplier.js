function returnMultiplier(list = [], target) {
    return list.map((value) => value * target);
}

arr = [1, 3, 4, 6, 7, 8, 9];

console.log(returnMultiplier(arr, 11));