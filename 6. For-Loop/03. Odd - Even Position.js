function solve (input)
{
    let numbersCount = Number(input.shift());
    let oddSum = 0;
    let oddMin = Math.max(1000000000.00);
    let oddMax = Math.min(-1000000000.00);
    let evenSum = 0;
    let evenMin = Math.max(1000000000.00);
    let evenMax = Math.min(-1000000000.00);
    let inputNumber = Number(input.shift());
    for (let currentNum = 1; currentNum <= numbersCount; currentNum++)
    {
        if (currentNum % 2 != 0)
        {
            oddSum += inputNumber;
            if (inputNumber > oddMax)
            {
                oddMax = inputNumber;
            }
            if (inputNumber < oddMin)
            {
                oddMin = inputNumber;
            }
        }
        else if (currentNum % 2 == 0)
        {
            evenSum += inputNumber;
            if (inputNumber > evenMax)
            {
                evenMax = inputNumber;
            }
            if (inputNumber < evenMin)
            {
                evenMin = inputNumber;
            }
        }
        inputNumber = Number(input.shift());
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if (numbersCount >= 1)
    {
        console.log(`OddMin=${oddMin.toFixed(2)},`);
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }
    else if (numbersCount == 0)
    {
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);  
    }
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if (numbersCount >= 2)
    {
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
    else if(numbersCount < 2)
    {
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    }
}
solve(["6", "2", "3", "5", "4", "2", "1"])
//solve(["1","1"])
//solve(["0"])