function findIndexPos(searchArray = [], key) {
    for(var index = 0; index < searchArray.length; index++) {
        if(searchArray[index] == key) {
            return index;
        }
    }
    return -1;
}

console.log(findIndexPos(['a', 'h', 'k', 's', 'u', 'i', 'o'], 'm'));
console.log(findIndexPos([1, 2, 3, 4, 6, 7, 5, 9, 11], 12));