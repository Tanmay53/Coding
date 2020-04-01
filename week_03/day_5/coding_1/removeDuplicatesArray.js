function removeDuplicatesArray(sourceArray = []) {
    var arrLength = sourceArray.length;
    for(var keyIndex = 0; keyIndex < arrLength; keyIndex++) {
        for(var index = (keyIndex + 1); index < arrLength; index++) {
            if(sourceArray[index] == sourceArray[keyIndex]) {
                sourceArray.splice(index, 1);
                arrLength--;
            }
        }
    }
    console.log("Final Array : ", sourceArray);
}

removeDuplicatesArray(['a', 'b', 'c', 'a', 'f', 'l', 'c', 'f', 'j', 'u', 'l', 'k']);