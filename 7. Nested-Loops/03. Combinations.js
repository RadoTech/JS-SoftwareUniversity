function solve(input)
{
let inputNumber = Number(input.shift());
let combinationCounter = 0;
for (let x1 = 0; x1 <= inputNumber; x1++)
{
    for (let x2 = 0; x2 <= inputNumber; x2++)
    {
        for (let x3 = 0; x3 <= inputNumber; x3++)
        {
            if ((x1 + x2 + x3) == inputNumber)
            combinationCounter++;
        }
    }
}
console.log(`${combinationCounter}`)
}
solve(["25"])