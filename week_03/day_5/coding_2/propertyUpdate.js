function propertyUpdate(userObject = {}, propertyName, newValue) {
    userObject[propertyName] = newValue;
}

var user = {
    name: "Rupesh",
    email: "rupesh33@gmail.com",
    password: "dduih99d"
};

propertyUpdate(user, "age", 12);

console.log(user);