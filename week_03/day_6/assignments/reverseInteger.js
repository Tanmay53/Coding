function reverseInteger(number) {
    var intNum = parseInt(number);
    var reverse = 0;

    while(intNum > 0) {
        var remainder = intNum % 10;
        reverse = (reverse * 10) + remainder;
        intNum = parseInt(intNum / 10);
    }

    return reverse;
}

console.log(reverseInteger("3553204"));