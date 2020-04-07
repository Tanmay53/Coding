function checkAge() {
    var age = parseFloat(document.getElementById("age").value);

    if(age > 18) {
        alert("You can drive in India!");
    }
    else if(age < 18) {
        alert("You can not drive in India!");
    }
    else if(age == 18){
        alert("You are just old enough to drive in India!");
    }
    else {
        alert("Pleae enter a valid input.");
    }
}

function changeColor() {
    var bgColor = document.getElementById("color").value;

    document.getElementById("coloredButton").style.backgroundColor = bgColor;
}

function findContinent() {
    var country = document.getElementById("country").value;
    var continent = "";

    switch(country) {
        case "india":
        case "china":
        case "nepal":
        case "singapore":
            continent = "Asia";
            break;
        case "usa":
        case "mexico":
        case "canada":
            continent = "North America";
            break;
        case "australia":
            continent = "Oceania";
            break;
        case "france":
        case "germany":
        case "argentina":
        case "sweden":
            continent = "Europe";
            break;
        case "sa":
        case "nigeria":
        case "brazil":
            continent = "Africa";
            break;
        default:
            continent = "n/a";
    }

    alert("The Continent is " + continent + ".");
}