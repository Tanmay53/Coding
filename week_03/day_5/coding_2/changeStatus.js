function changeStatus(userObject = {}, newStatus) {
    if(userObject.status == undefined) {
        return "Invalid Input.";
    }
    else {
        switch(newStatus.toUpperCase()) {
            case "BASIC":
                userObject.status = "basic";
                userObject.credit = 80000;
                break;
            case "PREMIUM":
                userObject.status = "premium";
                userObject.credit = 300000;
                break;
            case "PLATINUM":
                userObject.status = "platinum";
                userObject.credit = 600000;
                break;
            default :
                return "Invalid Input.";
        }
        return userObject;
    }
}

var user = {
    name: "Vikram",
    id: "dji344",
    status: "basic",
    credit: 80000,
};

console.log(changeStatus(user, "platinum"));