var first = 0;
function displayResults() {

    addClassTo("message", "noDisplay");
    
    if(nameCheck() && emailCheck() && mobileCheck()) {
        if(!first) {
            removeClassFrom("title", "noDisplay");
            first = 1;
        }

        printDataInDataListFromInput(["nameDisplay", "mailDisplay", "mobileDisplay"], ["name", "mail", "mobile"]);

        printDataToInput(["name", "mail", "mobile"], ["", "", ""]);
    }
}

function nameCheck() {
    var name = document.getElementById("name").value;

    if((name.length < 4) || (name.length > 10)) {
        var mElement = document.getElementsByClassName("message")[0];
        mElement.classList.remove("noDisplay");
        mElement.innerHTML = "Enter a Name of 4 to 10 characters";
        return false;
    }
    else {
        return true;
    }
}

function emailCheck() {
    var mail = document.getElementById("mail").value;
    if(isEmail(mail)) {
        return true;
    }
    else {
        var mElement = document.getElementsByClassName("message")[1];
        mElement.classList.remove("noDisplay");
        mElement.innerHTML = "Enter a Valid E-Mail";
        return false;
    }
}

function mobileCheck() {
    var mobile = document.getElementById("mobile").value;

    if(mobile.length != 10) {
        var mElement = document.getElementsByClassName("message")[2];
        mElement.classList.remove("noDisplay");
        mElement.innerHTML = "Enter a Valid Mobile Number.";
        return false;
    }
    else {
        return true;
    }
}

function removeClassFrom(keyClass = "", removalClass = "") {
    var elements = document.getElementsByClassName(keyClass);
    var length = elements.length;

    for(var index = 0; index < length; index++) {

        elements[index].classList.remove(removalClass);
    }
}

function addClassTo(keyClass = "", newClass = "") {
    var elements = document.getElementsByClassName(keyClass);
    var length = elements.length;

    for(var index = 0; index < length; index++) {
        elements[index].classList.add(newClass);
    }
}

function printDataInDataListFromInput(idList = [], dataIdList = []) {
    for(var index = 0; index < idList.length; index++) {
        document.getElementById(idList[index]).innerHTML = document.getElementById(dataIdList[index]).value;
    }   
}

function printDataToInput(idList = [], dataList = []) {
    for(var index = 0; index < idList.length; index++) {
        document.getElementById(idList[index]).value = dataList[index];
    }
}

function isEmail(userMail) {
    var atCount = 0, dotCount = 0;
    var tldList = [];

    var file = new XMLHttpRequest(); // Fething the Top Level Domain List.
    file.onreadystatechange = function() {
        if((this.readyState == 4) && this.status == 200) {
            tldList = file.responseText.split("\n");
        }
    }
    file.open("GET", "Top_Level_Domain_List.txt", false);
    file.send();

    if((userMail.indexOf("@") != -1) && (userMail.indexOf(".") != -1)) {
        for(var index = 0; index < userMail.length; index++) {
            var charCode = userMail.charCodeAt(index);
    
            if( ((charCode >= 65) && (charCode <= 90)) || //for A-Z
            ((charCode >= 97) && (charCode <= 122)) || //for a-z
            ((charCode >= 48) && (charCode <= 57)) || //for 0-9
            (charCode == 45) || //for -
            (charCode == 95) //for _
            ) {
                continue;
            }
            else if((userMail[index] == '@') && (atCount == 0)) {// if there is more than 1 '@' then the condition will fall into Else condition.
                atCount = 1;
                if((index == 0) || //for '@' at starting
                (index == (userMail.length - 1)) || //for '@' at ending
                (userMail[index - 1] == '.') || //for . before '@'
                (userMail[index + 1] == '.') //for . after '@'
                ) {
                    console.log(1);
                    return false;
                }
            }
            else if(userMail[index] == '.') {

                if((userMail[index + 1] == '.') || // for Double Dot
                (index == 0) || // for '.' starting
                (index == (userMail.length - 1)) // for '.' at ending
                ) {
                    console.log(2);
                    return false;
                }

                dotCount++;

                if(atCount == 1) { // if an @ has occured then we can check for the Top Level Domain.
                    var domains = userMail.substr(index + 1).split("."); // converting top level domains to an array for verification. Eg .co.in => ["co", "in"]

                    for(var arrIndex = 0; arrIndex < domains.length; arrIndex++) {
                        var capDomain = domains[arrIndex].toUpperCase();
                        if(!tldList.includes(capDomain)) { // checking form the Top Level Domain List.
                            console.log(3);
                            return false;
                        }
                    }
                    break; // teminating the loop as all characters are verified.
                }
            }
            else {
                console.log(4);
                return false; // for all character except aA-zZ 0-9 - _ . @
            }
        }

        return true; // email fully valid
    }
    else {
        console.log(5);
        return false;
    }
}
