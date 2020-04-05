function unionArray(array1 = [], array2 = []) {
    var union = {};

    for(var index = 0; index < array1.length; index++) {
        union[array1[index]] = array1[index];
    }

    for(var index = 0; index < array2.length; index++) {
        union[array2[index]] = array2[index];
    }

    return Object.values(union);
}

var arr1 = [1, 3, 4, 5, 6];
var arr2 = [3, 4, 1, 0, 9, 8];

console.log(unionArray(arr1, arr2));