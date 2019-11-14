function solve (input)
{
    let radians = input.shift();
    let degrees = radians * (180 / Math.PI);
    console.log(`${degrees.toFixed(0)}`)
}
solve ([6.2832])