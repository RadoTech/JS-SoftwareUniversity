function solve(input)
{
    let passengersAtStart = Number(input.shift());
    let totalStopsCount = Number(input.shift());
    let passengersOut = Number(input.shift());
    let passengersIn = Number(input.shift());
    let passengersAtFinal = passengersAtStart;

    for (let stop = 1; stop <= totalStopsCount; stop++)
    {
        passengersAtFinal -= passengersOut;
        passengersAtFinal += passengersIn;
        if (stop % 2 != 0)// + 2 controllers 
        {
            passengersAtFinal += 2;
        }
        else if (stop % 2 == 0)
        {
            passengersAtFinal -= 2;
        }
        passengersOut = Number(input.shift());
        passengersIn = Number(input.shift());
    }
    console.log(`The final number of passengers is : ${passengersAtFinal}`)
}
solve(["20", "2", "10", "5", "5", "3"])