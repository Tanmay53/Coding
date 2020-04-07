function findExponent() {
    var numbers = findValuesById(["num1", "num2"]);
    var result = 1;

    for(var power = 1; power <= parseInt(numbers[1]); power++) {
        result *= parseInt(numbers[0]);
    }

    document.getElementById("powResult").innerHTML = result;
}

function findValuesById(ids = []) {
    var values = [];
    for(var index = 0; index < ids.length; index++) {
        values.push(document.getElementById(ids[index]).value);
    }

    return values;
}

function printSumOfMultiples() {
    var limit = parseInt(document.getElementById("limit").value);
    var sum = 0;

    for(var number = 0; number <= limit; number += 15) {
        sum += number;
    }

    document.getElementById("sum").innerHTML = sum;
}

function verifyEmail() {
    var email = document.getElementById("mail").value;

    if(isEmail(email)) {
        alert("Valid Email!");
    }
    else {
        alert("Invalid Email!");
    }

}

function checkEligibility() {
    var data = document.getElementsByClassName("marriage");
    var age = parseFloat(data[0].value);
    var gender = data[1].value;

    if(((gender == "female") && (age > 18)) ||
    ((gender == "male") && (age > 21))) {
        alert("You are Eligible to Marry");
    }
    else {
        alert("You are not Eligible to Marry");
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
                    return false;
                }
            }
            else if(userMail[index] == '.') {

                if((userMail[index + 1] == '.') || // for Double Dot
                (index == 0) || // for '.' starting
                (index == (userMail.length - 1)) // for '.' at ending
                ) {
                    return false;
                }

                dotCount++;

                if(atCount == 1) { // if an @ has occured then we can check for the Top Level Domain.
                    var domains = userMail.substr(index + 1).split("."); // converting top level domains to an array for verification. Eg .co.in => ["co", "in"]

                    for(var arrIndex = 0; arrIndex < domains.length; arrIndex++) {
                        var capDomain = domains[arrIndex].toUpperCase();
                        if(!tldList.includes(capDomain)) { // checking form the Top Level Domain List.
                            return false;
                        }
                    }
                    break; // teminating the loop as all characters are verified.
                }
            }
            else {
                return false; // for all character except aA-zZ 0-9 - _ . @
            }
        }

        return true; // email fully valid
    }
    else {
        return false;
    }
}
