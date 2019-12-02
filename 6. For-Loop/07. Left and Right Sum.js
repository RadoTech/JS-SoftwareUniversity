function solve(input)
{
let n = Number(input.shift());
let firstGroupSum = 0;
let secondGroupSum = 0;
for (let rotations = 1; rotations <= n*2; rotations++)
{
    if (rotations <= n)
    {
        let firstGroup = Number(input.shift());
        firstGroupSum += firstGroup;
    }
    else if (rotations > n)
    {
        let secondGroup = Number(input.shift());
        secondGroupSum += secondGroup;
    }
}
if (firstGroupSum == secondGroupSum)
{
    console.log(`Yes, sum = ${firstGroupSum}`);
}
else
{
    console.log(`No, diff = ${Math.abs(firstGroupSum - secondGroupSum)}`);
}
}
solve(["2", "10", "90", "60", "40"])