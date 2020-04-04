function isPalindrome(testString = "") {
    var reverseString = "";
    testString = testString.toString();

    for(var index = (testString.length - 1); index >= 0; index--) {
        reverseString += testString[index];
    }

    if(reverseString == testString) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPalindrome(101010101));