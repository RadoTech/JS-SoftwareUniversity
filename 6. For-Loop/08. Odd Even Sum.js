function solve(input)
{
let n = Number(input.shift());
let inputNumber = Number(input.shift());
let evenSum = 0;
let oddSum = 0;
for (let index = 1; index <= n; index++)
{
    if (index % 2 == 0)
    {
        evenSum += inputNumber;
    }
    else if (index % 2 != 0)
    {
        oddSum += inputNumber;
    }
    inputNumber = Number(input.shift());
}
if (evenSum == oddSum)
{
    console.log(`Yes`)
    console.log(`Sum = ${evenSum}`)
}
else
{
    let diff = Math.abs(evenSum - oddSum);
    console.log(`No`)
    console.log(`Diff = ${diff}`)
}
}
solve(["4", "10", "50", "60", "20"])