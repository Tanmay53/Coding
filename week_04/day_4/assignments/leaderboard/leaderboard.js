var max = null, min = null;

function enterScore(digit) {
    document.getElementById("currentScore").innerHTML += digit;
}

function checkScore() {
    var currentScore = parseInt(document.getElementById("currentScore").innerHTML);

    if((max == null) && (min == null)) {
        replaceDataOfIds(["minScore", "maxScore"], [currentScore, currentScore]);
        min = currentScore;
        max = currentScore;
    }
    else if(currentScore < min) {
        replaceDataOfIds(["minScore"], [currentScore]);
        min = currentScore;
    }
    else if(currentScore > max) {
        replaceDataOfIds(["maxScore"], [currentScore]);
        max = currentScore;
    }

    document.getElementById("currentScore").innerHTML = "";
}

function replaceDataOfIds(idList = [], dataList = []) {
    for(var index = 0; index < idList.length; index++) {
        document.getElementById(idList[index]).innerHTML = dataList[index];
    }
}