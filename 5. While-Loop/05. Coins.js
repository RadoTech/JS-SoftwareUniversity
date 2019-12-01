function solve (input)
{
let inputSum = Number(input.shift());

let lv2 = 0;
let lv1 = 0;
let lv05 = 0;
let lv02 = 0;
let lv01 = 0;
let lv005 = 0;
let lv002 = 0;
let lv001 = 0;

while (inputSum.toFixed(2) >= 0.01)
{
    if (inputSum.toFixed(2) >= 2.00)
    {
        lv2++;
        inputSum -= 2;
    }
    else if (inputSum.toFixed(2) >= 1.00)
    {
        lv1++;
        inputSum -= 1;
    }
    else if (inputSum.toFixed(2) >= 0.50)
    {
        lv05++;
        inputSum -= 0.5;
    }
    else if (inputSum.toFixed(2) >= 0.20)
    {
        lv02++;
        inputSum -= 0.2;
    }
    else if (inputSum.toFixed(2) >= 0.10)
    {
        lv01++;
        inputSum -= 0.1;
    }
    else if (inputSum.toFixed(2) >= 0.05)
    {
        lv005++;
        inputSum -= 0.05;
    }
    else if (inputSum.toFixed(2) >= 0.02)
    {
        lv002++;
        inputSum -= 0.02;
    }
    else
    {
        lv001++;
        inputSum -= 0.01;
    }
}
let allCoinsCounter = lv2 + lv1 + lv05 + lv02 + lv01 + lv005 + lv002 + lv001;
console.log(`${allCoinsCounter}`)
}
solve (["1.51"])