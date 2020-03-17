const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1
greet = "Hello Masai";
console.log(greet);

// 2
for(i = 1; i <= 10; i++)
{
    console.log(greet);
}

// 3
limit = 1;
readline.question("Enter Limit of numbers to Print. \n", data => { 
    limit = data;
    console.log("The Numbers are : ");
    for(j = 0; j <= limit; j++)
    {
        console.log(j);
    }
    
    // 4
    console.log("The Numbers in Reverse Order : ");
    for(k = limit; k >= 0; k--)
    {
        console.log(k);
    }
    
    // 5
    console.log("The Odd Numbers are : ");
    for(l = 0; l <= limit; l++)
    {
        if(l % 2 == 1)
        {
            console.log(l);
        }
    }
    readline.close();
});