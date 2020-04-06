function gradeStudents(studentData = [{}]) {
    for(var index = 0; index < studentData.length; index++) {
        var studentMarks = studentData[index].marks;
        var studentGrade = getStudentGrade(studentMarks);
        studentData[index].grade = studentGrade;
    }
}

function getStudentGrade(marks) {
    if((marks > 90) && (marks <= 100)) {
        return "A";
    }
    else if((marks > 80) && (marks <= 90)) {
        return "B";
    }
    else if((marks > 60) && (marks <= 80)) {
        return "C";
    }
    else if((marks > 40) && (marks <= 60)) {
        return "D";
    }
    else if((marks > 0) && (marks <= 40)) {
        return "F";
    }
    else {
        return "n/a";
    }
}

var students = [
    { name: "John", marks: 89},
    { name: "Rajeev", marks: 56},
    { name: "Mohan", marks: 92},
    { name: "Manoj", marks: 72},
    { name: "Sourabh", marks: 32},
    { name: "Prateek", marks: 120}
];

gradeStudents(students);

console.log(students);