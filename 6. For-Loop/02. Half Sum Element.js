function solve(input)
{
    let numbersCount = Number(input.shift());
    let currentInput = Number(input.shift());
    let maxNum = Math.min(-1000000000.000);
    let sumNums = 0;
    for (let index = 1; index <= numbersCount; index++)
    {
        if (maxNum < currentInput)
        {
            maxNum = currentInput;
        }
        sumNums += currentInput;
        currentInput = Number(input.shift());
    }
    if (maxNum == (sumNums - maxNum))
    {
        console.log(`Yes`);
        console.log(`Sum = ${maxNum}`);
    }
    else
    {
        console.log(`No`);
        console.log(`Diff = ${Math.abs(maxNum - (sumNums - maxNum))}`);  
    }
}
//solve(["7", "3", "4", "1", "1", "2", "12", "1", ])
solve(["3", "1", "1", "10"])