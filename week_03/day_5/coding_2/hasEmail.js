const fs = require("fs");
fs.readFile("Top_Level_Domain_List.txt", "utf-8", function(err, data) {
   
    var tldList = data.split("\n");

    function hasEmail(userData = {}) {
        var userMail = userData.email, atCount = 0, dotCount = 0;

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

    var student = {
        name: "Rohan",
        email: "name..1234@yahoo.com",
        password: "dd0094iojdoi"
    }

    console.log(hasEmail(student));
});