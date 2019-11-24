function solve (input)
{
let inputNumber = Number(input.shift());

if (inputNumber >= -100 && inputNumber <= 100)
{
    if (inputNumber != 0)
    {
        console.log(`Yes`);
    }
    else
    {
        console.log(`No`);
    }
}
else 
{
    console.log("No");
}
}
solve (["0"])