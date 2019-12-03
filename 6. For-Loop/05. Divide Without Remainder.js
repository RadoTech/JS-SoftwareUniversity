function solve(input)
{
let numbersCount = Number(input.shift());
let group2 = 0;
let group3 = 0;
let group4 = 0;
let inputNumber = Number(input.shift());
for (let currentNum = 1; currentNum <= numbersCount; currentNum++)
{
        if (inputNumber % 2 == 0)
        {
            group2++; //there is no group0 or group1 - starting with group2 
        }
        if (inputNumber % 3 == 0)
        {
            group3++;
        }
        if (inputNumber % 4 == 0)
        {
            group4++;
        }
        inputNumber = Number(input.shift());
}
let group2Percent = (group2 / numbersCount)*100;
let group3Percent = (group3 / numbersCount)*100;
let group4Percent = (group4 / numbersCount)*100;
console.log(`${group2Percent.toFixed(2)}%`);
console.log(`${group3Percent.toFixed(2)}%`);
console.log(`${group4Percent.toFixed(2)}%`);
}
solve(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65",])
//solve(["3", "3", "6", "9"])