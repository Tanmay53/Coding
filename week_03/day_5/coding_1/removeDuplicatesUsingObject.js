function removeDuplicatesUsingObjects(sourceArray = []) {
    var filterObject = {};

    for(var index = 0; index < sourceArray.length; index++) {
        filterObject[ sourceArray[index] ] = sourceArray[index];
    }

    return Object.values(filterObject);
}

console.log(removeDuplicatesUsingObjects(['a', 'd', 't', 'a', 'f', 'u', 'f', 'm', 'd', 'a', 'y', 't']));