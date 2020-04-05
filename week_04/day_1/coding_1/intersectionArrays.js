function intersectionArray(array1 = [], array2 = []) {
    var arr1Object = createObjectFromArray(array1);
    var arr2Object = createObjectFromArray(array2);
    var intersection = [];

    for(key in arr1Object) {
        if(arr1Object[key] == arr2Object[key]) {
            intersection.push(key);
        }
    }

    return intersection;
}

function createObjectFromArray(list = []) {
    var arrObject = {};
    for(var index = 0; index < list.length; index++) {
        arrObject[list[index]] = list[index];
    }
    return arrObject;
}

var arr1 = [4, 5];
var arr2 = [4, 5];

console.log(intersectionArray(arr1, arr2));