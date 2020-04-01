function findIndexOccurance(searchArray = [], key) {
    var keyOccurances = [];

    for(var index = 0; index < searchArray.length; index++) {
        if(searchArray[ index ] == key) {
            keyOccurances.push(index);
        }
    }

    if(keyOccurances.length == 0) {
        return -1;
    }

    return keyOccurances;
}

console.log(findIndexOccurance([1, 4, 2, 5, 2, 5, 2, 3, 6, 5, 7, 6, 9, 8, 11, 10, 12, 3], 5));