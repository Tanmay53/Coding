function checkDisjointArrays(array1 = [], array2 = []) {
    var arr1Object = createObjectFromArray(array1);
    var arr2Object = createObjectFromArray(array2);

    for(key in arr1Object) {
        if(arr1Object[key] == arr2Object[key]) {
            return false;
        }
    }

    return true;
}

function createObjectFromArray(list = []) {
    var arrObject = {};
    for(var index = 0; index < list.length; index++) {
        arrObject[list[index]] = list[index];
    }
    return arrObject;
}

var arr1 = [1, 2, 3, 4, 6, 7];
var arr2 = [11, 22, 45, 8, 6];

console.log(checkDisjointArrays(arr1, arr2));