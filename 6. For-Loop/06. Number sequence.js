function solve(input)
{
let inputNumbersCount = Number(input.shift());
let maxNumber = Number.NEGATIVE_INFINITY;
let minNumber = Number.POSITIVE_INFINITY;
let currentNum = Number(input.shift());
for (let currentNumber = 1; currentNumber <= inputNumbersCount; currentNumber++) 
{
    if (currentNum > maxNumber)
    {
        maxNumber = currentNum;
    }
    if (currentNum < minNumber)
    {
        minNumber = currentNum;
    }
    currentNum = Number(input.shift())
}
console.log(`Max number: ${maxNumber}`)
console.log(`Min number: ${minNumber}`)
}
solve(["5", "10", "20", "304", "0", "50"])