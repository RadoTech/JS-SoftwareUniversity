function solve (input)
{
let product = input.shift();
let city = input.shift();
let quantity = Number(input.shift());

if (city == "Sofia")
{
    switch (product)
    {
        case "coffee": console.log(0.5 * quantity);
            break;
        case "water": console.log(0.8 * quantity);
            break;
        case "beer": console.log(1.2 * quantity);
            break;
        case "sweets": console.log(1.45 * quantity);
            break;
        case "peanuts": console.log(1.6 * quantity);
            break;
    }
}
if (city == "Plovdiv")
{
    switch (product)
    {
        case "coffee": console.log(0.4 * quantity);
            break;
        case "water": console.log(0.7 * quantity);
            break;
        case "beer": console.log(1.15 * quantity);
            break;
        case "sweets": console.log(1.30 * quantity);
            break;
        case "peanuts": console.log(1.5 * quantity);
            break;
    }
}
if (city == "Varna")
{
    switch (product)
    {
        case "coffee": console.log(0.45 * quantity);
            break;
        case "water": console.log(0.7 * quantity);
            break;
        case "beer": console.log(1.1 * quantity);
            break;
        case "sweets": console.log(1.35 * quantity);
            break;
        case "peanuts": console.log(1.55 * quantity);
            break;
    }
}
}
solve (["sweets", "Sofia", "2.23"])