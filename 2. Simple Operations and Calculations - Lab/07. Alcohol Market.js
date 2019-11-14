function solve (input)
{
    let whiskeyPrice = Number(input.shift());
    let beerLiters = Number(input.shift());
    let wineLiters = Number(input.shift());
    let rakiLiters = Number(input.shift());
    let whiskeyLiters = Number(input.shift());

    let rakiPrice = whiskeyPrice * 0.5;
    let winePrice = rakiPrice * 0.6;
    let beerPrice = rakiPrice * 0.2;

    let totalWhiskeyPrice = whiskeyPrice * whiskeyLiters;
    let totalRakiPrice = rakiPrice * rakiLiters;
    let totalWinePrice = winePrice * wineLiters;
    let totalBeerPrice = beerPrice * beerLiters;
    let totalSum = totalWhiskeyPrice + totalRakiPrice + totalWinePrice + totalBeerPrice;

    console.log(`${totalSum.toFixed(2)}`)
}
solve ([50,10,3.5,6.5,1])