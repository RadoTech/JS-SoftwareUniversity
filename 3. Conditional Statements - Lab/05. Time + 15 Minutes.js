function solve (input)
{
    let inputHour = Number(input.shift());
    let inputMinutes = Number(input.shift());

    let add15m = 15; //adding 15 minutes variable
    let outputMinutes = inputMinutes + add15m;
    let outputHour = inputHour;

    if (outputMinutes > 59)
    {
        outputHour++;
        outputMinutes -= 60;
    }
    if (outputHour > 23)
    {
        outputHour = 0;
    }
    if (outputMinutes < 10)
    {
        console.log(`${outputHour}:0${outputMinutes}`)
    }
    else
    {
        console.log(`${outputHour}:${outputMinutes}`)
    }
}
solve (["23", "59"])