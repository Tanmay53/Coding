const prompt = require("prompt-sync")({sigint: true});

function stringMirror()
{
    var inputString = prompt("Enter an Alphabetic String : ");
    var mirrorCode, mirrorString = "";

    for(var i = 0; i < inputString.length; i++)
    {
        var charCode = inputString.charCodeAt(i);
        if((charCode >= 65) && (charCode <= 77))
        {
            mirrorCode = (77 + (78 - charCode));
        }
        else if((charCode >= 78) && (charCode <= 90))
        {
            mirrorCode = (78 - (charCode - 77));
        }
        else if((charCode >= 97) && (charCode <= 109))
        {
            mirrorCode = (109 + (110 - charCode));
        }
        else if((charCode >= 110) && (charCode <= 122))
        {
            mirrorCode = (110 - (charCode - 109));
        }
        mirrorString += String.fromCharCode(mirrorCode);
    }

    console.log("The Mirror String is", mirrorString);
}

function stringToSet(setString)
{
    var count=0, set = [];
    while(count < setString.length)
    {
        var num = "";
        while(!(isNaN(setString[count])))
        {
            num += setString[count];
            count++;
            if(count == setString.length)
                break;
        }
        num = parseInt(num);
        if(set.find(element => element == num) == undefined)
        {
            set.push(num);
        }
        count++;
    }
    return set;
}

//Disjoint Check
function findIntersection(set1, set2)
{
    var intersection = [];
    set1.forEach(function(value) {
        var found = set2.find(element => element == value);
        if(found != undefined)
        {
            intersection.push(value);
        }
    });
    return intersection;
}

function isSubset(set1, set2)
{
    var intersect = findIntersection(set1, set2);
    if(intersect.length == set1.length)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

function isSuperset(set1, set2)
{
    var intersect = findIntersection(set1, set2);
    if(intersect.length == set2.length)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

function findUnion(set1, set2)
{
    var union = [];
    union = union.concat(set1);
    set2.forEach(function(value) {
        if(union.find(element => element == value) == undefined)
        {
            union = union.concat(value);
        }
    });
    return union;
}

function findDifference(set1, set2)
{
    var difference = [];
    set1.forEach(function(value) {
        if(set2.find(element => element == value) == undefined)
        {
            difference.push(value);
        }
    });
    return difference;
}


var loopContinue = 1;
while(loopContinue)
{
    console.log("\nPress the keys : ");
    console.log("1 => Mirror a String.");
    console.log("2 => Use Set Properties.");
    console.log("0 => Exit.");

    var viewSelect = prompt(" ");

    switch(parseInt(viewSelect))
    {
        case 1:
            stringMirror();
            break;
        case 2:
            console.log("Provide the Inputs seperated by Commas(,)");
            var setAString = prompt("Enter the First Set.  A : ");
            var setBString = prompt("Enter the Second Set.  B : ");

            var setA = stringToSet(setAString), setB = stringToSet(setBString), operation, loopInternal = 1;

            console.log("The Sets are :- \n Set A : " + setA +  " \n Set B : " + setB);

            while(loopInternal)
            {
                console.log("\nPress the keys : ");
                console.log("1 => Check Disjunction of set A and B.");
                console.log("2 => Check if A is a Subset of B.");
                console.log("3 => Check if A is a Superset of B.");
                console.log("4 => Find Union of A and B.");
                console.log("5 => Find Intersection of A and B.");
                console.log("6 => Find A Difference B.");
                console.log("7 => Find A Symmetric Difference B.");
                console.log("0 => Exit.");

                operation = prompt(" ");

                switch(parseInt(operation))
                {
                    case 1:
                        if(findIntersection(setA, setB) == [])
                        {
                            console.log("A and B are Disjoint Sets.");
                        }
                        else
                        {
                            console.log("A and B are not Disjoint Sets.");
                        }
                        break;
                    case 2:
                        if(isSubset(setA, setB))
                        {
                            console.log("A is a Subset of B.");
                        }
                        else
                        {
                            console.log("A is not a Subset of B.");
                        }
                        break;
                    case 3:
                        if(isSuperset(setA, setB))
                        {
                            console.log("A is a Superset of B.");
                        }
                        else
                        {
                            console.log("A is not a Superset of B.");
                        }
                        break;
                    case 4:
                        console.log("The Union of A and B is : ", findUnion(setA, setB));
                        break;
                    case 5:
                        console.log("The Intersection of A and B is : ", findIntersection(setA, setB));
                        break;
                    case 6:
                        console.log("A Difference B is : ", findDifference(setA, setB));
                        break;
                    case 7:
                        var symDifference = findDifference(setA, setB).concat(findDifference(setB, setA));
                        console.log("A Symmetric Difference B is : ", symDifference);
                        break;
                    case 0:
                        loopInternal = 0;
                        break;
                    default:
                        console.log("Please Press the Correct Keys.");
                }
            }
            break;
        case 0:
            loopContinue = 0;
            break;
        default:
            console.log("Please Press the Correct Keys.");
    }
}