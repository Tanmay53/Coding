const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Number
readline.question("Enter the Number of Lines to Print.\n", limit => {

    // 1
    for(var i = 0; i <= limit; i++)
    {
        console.log("Hello Masai");
    }

    // 2
    console.log("The numbers are : ");
    for(var j = 0; j <= limit; j++)
    {
        console.log(j);
    }

    // 3
    console.log("The Even Numbers are : ");
    for(var k = 0; k <= limit; k++)
    {
        if((k % 2) == 0)
        {
            console.log(k);
        }
    }

    // New Number
    readline.question("Enter the Divisibility Number : ", num => {
        // 5
        var sum = 0, count = 0;
        num = Number(num);
        for(var l = 0; l <= limit; l += num)
        {
            sum = sum + l;
            count++;
        }
        avg = sum / count;
        console.log("Average of the Numbers Divisible by " + num + " is " + avg);

        // 6
        var sum = 0, count = 0, i = 0;
        while(i <= limit)
        {
            sum = sum + i;
            count++;
            i = i + num;
        }
        avg = sum / count;
        console.log("Average of the Numbers Divisible by " + num + " using While Loop is " + avg);

        // String
        readline.question("Enter a String : ", str => {
            // 4
            var rStr = "";
            for(var i = (str.length - 1); i >= 0; i--)
            {
                rStr = rStr + str[i];
            }
            console.log("The Reverse String is : \n", rStr);

            // 7,8
            var vCount = 0, conCount = 0, strArray = [];
            for(m = 0; m < str.length; m++)
            {
                switch(str[m].toUpperCase())
                {
                    case 'A':
                    case 'E':
                    case 'I':
                    case 'O':
                    case 'U':
                        vCount++;
                        break;
                    case 'B':
                    case 'C':
                    case 'D':
                    case 'F':
                    case 'G':
                    case 'H':
                    case 'J':
                    case 'K':
                    case 'L':
                    case 'M':
                    case 'N':
                    case 'P':
                    case 'Q':
                    case 'R':
                    case 'S':
                    case 'T':
                    case 'V':
                    case 'W':
                    case 'X':
                    case 'Y':
                    case 'Z':
                        conCount++;
                        break;
                }

                // 12
                strArray[m] = str[m];
            }
            console.log("There are " + vCount + " Vowels in the String(" + str + ").");
            console.log("There are " + conCount + " Consonants in the String(" + str + ").");
            console.log("The String Stored in the Array is : \n", strArray);

            readline.question("Enter Numbers Seperated by Comma(,) : \n ", numString => {

                // 9
                var numArray = [], sum = 0;
                for(var i = 0; i < numString.length; i++)
                {
                    var num = "";
                    while(!(isNaN(numString[i])))
                    {
                        num += numString[i];
                        i++;
                        if(i == numString.length)
                            break;
                    }
                    numArray[numArray.length] = parseInt(num);
                    if((numArray[numArray.length - 1] % 2) == 0)
                    {
                        sum += numArray[numArray.length - 1];
                    }
                }
                console.log("The Sum of the Even Numbers is " + sum);

                readline.question("Enter a seperator for the above String(" + str + ").", seperator => {

                    // 10
                    var newArray = [];
                    for(var j = 0; j < str.length; j++)
                    {
                        var subStr = "";
                        while(str[j] != seperator)
                        {
                            subStr += str[j];
                            j++;
                            if(j == str.length)
                                break;
                        }
                        newArray[newArray.length] = subStr;
                    }
                    console.log("The Array formed is : \n" + newArray);
                    
                    readline.question("Enter a Seperator for an Array.", joint => {

                        // 11
                        var dummyArray = ["Summer", "Winter", "Monsoon", "Autumn"], joinedString = "";
                        for(var n = 0; n < dummyArray.length; n++)
                        {
                            joinedString += dummyArray[n];
                            if(n != (strArray.length - 1))
                            {
                                joinedString += joint;
                            }
                        }
                        console.log("The Final String is : ", joinedString);
                        readline.close();
                    });
                });
            });
        });
    });
});
