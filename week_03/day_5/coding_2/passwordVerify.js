function passwordVerify(userObject = {}, passkey) {
    return(userObject.password === passkey);
}

var user = {
    name: "Mohan",
    email: "mohan34@gmail.com",
    password: "45mon34"
}

console.log(passwordVerify(user, "45mon34"));