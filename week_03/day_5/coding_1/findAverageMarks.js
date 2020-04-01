function findAverageMarks(sourceObject = {}) {
    var marksArray = sourceObject.marks, sum = 0;
    var marksLength = marksArray.length;

    for(var index = 0; index < marksLength; index++) {
        sum += marksArray[index];
    }

    return(sum / marksLength);
}

var student = {
    name: "Raghav",
    marks: [77, 93, 69, 83, 88],
}

console.log("The average marks of", student.name, "are ", findAverageMarks(student), ".");