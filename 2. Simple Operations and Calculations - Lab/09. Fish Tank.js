function fishTank (input)
{
    let len = input.shift();
    let wid = input.shift();
    let high = input.shift();
    let percentage = input.shift();

    let volume = len * wid * high;
    let volumeLiters = volume * 0.001;
    let usedLiters = volumeLiters * (percentage / 100);
    let litersNeeded = volumeLiters - usedLiters;

    console.log(`${litersNeeded.toFixed(3)}`)
}
fishTank ([85,75,47,17])