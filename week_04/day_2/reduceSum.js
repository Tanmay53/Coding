function reduceSum(list = [], target) {
    return list.filter((value) => value > target).reduce((accumulator, value) => accumulator + value, 0);
}

var arr = [2, 4, 2, 7, 8, ,5, 3, 10];

console.log(reduceSum(arr, 0));