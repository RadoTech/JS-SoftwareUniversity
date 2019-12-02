function solve(input)
{
let inputNumCount = Number(input.shift());
let numSum = 0;
if (inputNumCount == 0)
{
    console.log(`0`);
}
for (let index = 1; index <= inputNumCount; index++)
{
    let currentNum = Number(input.shift());
    numSum += currentNum;
    if (index == inputNumCount)
    {
        console.log(`${numSum}`);
        return;
    }
}
}
solve(["0"])