function newUser(userName, userEmail, userPassword) {
    var newUser = {
        name: userName,
        email: userEmail,
        password: userPassword
    };

    return newUser;
}

console.log("New User Object :", newUser("Rohan", "mukesh@hotmail.com", "9087908ads"));