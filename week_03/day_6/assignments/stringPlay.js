function replaceSpacesWith(baseString = "", symbol) {
    var newString = "";
    for(var index = 0; index < baseString.length; index++) {
        if(baseString[index] == " ") {
            newString += symbol;
        }
        else {
            newString += baseString[index];
        }
    }
    return newString;
}

function snakeCase(baseString = "") {
    return replaceSpacesWith(baseString, "_");
}

function hyphenCase(baseString = "") {
    return replaceSpacesWith(baseString, "-");
}

function camelCase(baseString = "") {
    var camelString = "";

    for(var index = 0; index < baseString.length; index++) {
        if((baseString[index] == " ") && (index != (baseString.length - 1))) {
            camelString += baseString[index + 1].toUpperCase();
            index++;
        }
        else {
            camelString += baseString[index];
        }
    }

    return camelString;
}

console.log(camelCase("how are you!"));
console.log(snakeCase("how are you!"));
console.log(hyphenCase("how are you!"));