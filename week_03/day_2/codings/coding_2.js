function ageCheck(age) {
    age = Number(age);
    if(age > 18) {
        console.log("You can drive in India!");
    }
    else if(age == 18) {
        console.log("You are just old enough to drive in India!");
    }
    else if(age < 18) {
        console.log("You can't drive in India!");
    }
    else {
        console.log("Please provide a valid Input.");
    }
}
ageCheck(18);

function findContinent(country) {
    var continent = null;
    switch(country) {
        case "India":
        case "China":
        case "Nepal":
        case "Singapore":
            continent = "Asia";
            break;
        case "United States of America":
        case "Mexico":
        case "Canada":
            continent = "North America";
            break;
        case "Australia":
            continent = "Oceania";
            break;
        case "France":
        case "Germany":
        case "Sweden":
            continent = "Europe";
            break;
        case "South Africa":
        case "Nigeria":
            continent = "Africa";
            break;
        case "Argentina":
        case "Brazil":
            continent = "South America";
            break;
    }
    if(continent != null) {
        console.log(country , "is in ", continent, ".");
    }
    else {
        console.log("Please input a valid Country Name.");
    }
}
findContinent("Argentina");

function finalRate(amount) {
    var finalPrice, discount = 0;
    amount = Number(amount);
    if(!isNaN(amount)) {
        if(amount >= 300) {
            discount = amount * 10 / 100;
            if(discount > 100) {
                discount = 100;
            }
        }
        else if((amount < 300) && (amount > 0)) {
            console.log("Discount is Invalid.");
        }
        else {
            console.log("Please input a valid Amount.")
        }
        finalPrice = amount - discount;
        console.log("Final Price : ", finalPrice);
        if(discount > 0) {
            console.log("Discount Price : ", discount);
        }
    }
    else {
        console.log("Plese input a valid Amount.");
    }
}
finalRate(389);
finalRate(3045);