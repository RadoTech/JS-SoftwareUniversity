function calculator (input)
{
let USD = input.shift();
let BGNRate = 1.79549;
let BGNResult = USD * BGNRate;

console.log(`${BGNResult.toFixed(2)}`)
}
calculator ([12.5])