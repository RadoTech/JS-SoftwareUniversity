function solve(input)
{
let startLoop = Number(input.shift());
let endLoop = Number(input.shift());
let magicNum = Number(input.shift());
let combinationCounter = 0;
let firstNum = 0;
let secondNum = 0;
let magicNumMatch = false;

for (let index1 = startLoop; index1 <= endLoop; index1++)
{
    for (let index2 = startLoop; index2 <= endLoop; index2++)
    {
        combinationCounter++;
        if ((index1 + index2) == magicNum)
        {
        firstNum = index1;
        secondNum = index2;
        magicNumMatch = true;
        break;
        }
    }
    if (magicNumMatch)
    {
        break;
    }
}
if (magicNumMatch)
{
    console.log(`Combination N:${combinationCounter} (${firstNum} + ${secondNum} = ${magicNum})`)
}
else if (!magicNumMatch)
{
    console.log(`${combinationCounter} combinations - neither equals ${magicNum}`)
}
}
solve(["88", "888", "1000"])