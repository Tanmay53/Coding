function propertyCheck(userObject = {}, property) {
    var objectKeys = Object.keys(userObject);
    return(objectKeys.includes(property));
}

var student = {
    name: "Tanamy",
    course: "BCA",
    year: 1
}
console.log(propertyCheck(student, "semester"));