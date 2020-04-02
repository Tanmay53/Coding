function addSkill(userObject = {}, newSkill) {
    if(userObject.skill == undefined) {
        userObject.skill = [newSkill];
    }
    else {
        userObject.skill.push(newSkill);
    }
}

var user = {
    name: "Ashish",
    email: "ahish3433@gmail.com"
};

addSkill(user, "git");

console.log(user);