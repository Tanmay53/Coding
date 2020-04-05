function checkSupersetArray(array1 = [], array2 = []) {
    var arr1Object = createObjectFromArray(array1);
    var arr2Object = createObjectFromArray(array2);

    for(key in arr2Object) {
        if(arr2Object[key] != arr1Object[key]) {
            return false;
        }
    }

    if(array1.length == array2.length) { // for Equal Sets.
        return false;
    }
    else {
        return true;
    }
}

function createObjectFromArray(list = []) {
    var arrObject = {};
    for(var index = 0; index < list.length; index++) {
        arrObject[list[index]] = list[index];
    }
    return arrObject;
}

var arr1 = [1, 5, 3, 4, 9, 5];
var arr2 = [4, 3, 1, 5, 4, 9];

console.log(checkSupersetArray(arr1, arr2));