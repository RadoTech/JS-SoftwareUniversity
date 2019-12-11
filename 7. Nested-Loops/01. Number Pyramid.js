function solve(input)
{
let inputNumber = Number(input.shift());
let current = 1;
let isBigger = false;
let printCurrentLine = "";

for (let rows = 1; rows <= inputNumber; rows++)
{
    for (let columns = 1; columns <= rows; columns++)
    {
        if (current > inputNumber)
        {
            isBigger = true;
            break;
        }
        printCurrentLine += current + " ";
        current++;
    }
    console.log(printCurrentLine);
    printCurrentLine = "";
    if (isBigger)
    {
        break;
    }
}
}
solve(["15"])