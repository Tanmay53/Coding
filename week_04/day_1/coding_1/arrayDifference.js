function arrayDifference(array1, array2) {
    var arr1Object = createObjectFromArray(array1);
    var arr2Object = createObjectFromArray(array2);
    var difference = [];

    for(key in arr1Object) {
        if(arr1Object[key] != arr2Object[key]) {
            difference.push(key);
        }
    }

    return difference;
}

function createObjectFromArray(list = []) {
    var arrObject = {};
    for(var index = 0; index < list.length; index++) {
        arrObject[list[index]] = list[index];
    }
    return arrObject;
}

var arr1 = [2, 4, 11, 6, 8, 10, 12];
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arrayDifference(arr1, arr2));