function checkElementBefore(list = []) {
    return list.filter(function(value) {
        return typeof(value) == "number";
    }).reduce(function(accumulator, value) {
        return accumulator + value;
    }, 0);
}

var arr = ["potato", 45, "cheese", 90, "carrot", 40, "spinnach", 20, "tomato", 30, "coriander", 10];

console.log(checkElementBefore(arr));