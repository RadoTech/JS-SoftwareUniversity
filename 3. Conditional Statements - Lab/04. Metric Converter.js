function solve (input)
{

let inputNumber = Number(input.shift());
let inputMetric = input.shift();
let outputMetric = input.shift();

if (inputMetric == "m" && outputMetric == "cm")
{
    inputNumber *= 100;
}
else if (inputMetric == "m" && outputMetric == "mm")
{
    inputNumber *= 1000;
}
else if (inputMetric == "cm" && outputMetric == "m")
{
    inputNumber /= 100;
}
else if (inputMetric == "cm" && outputMetric == "mm")
{
    inputNumber *= 10;
}
else if (inputMetric == "mm" && outputMetric == "m")
{
    inputNumber /= 1000;
}
else if (inputMetric == "mm" && outputMetric == "cm")
{
    inputNumber /= 10;
}
else
{
    inputNumber = inputNumber;
}

let outputNumber = inputNumber;
console.log(`${outputNumber.toFixed(3)}`)
}
solve (["150", "m", "cm"])