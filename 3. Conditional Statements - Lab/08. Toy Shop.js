function solve (input)
{
    let vacationPrice = Number(input.shift());
    let puzzelsCout = Number(input.shift());
    let tolkingDollsCount = Number(input.shift());
    let teddyBearsCount = Number(input.shift());
    let minionsCount = Number(input.shift());
    let trucksCount = Number(input.shift());

    let puzzelPrice = 2.60;
    let tolkingDollPrice = 3;
    let teddyBearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;

    let totalPuzzelsSum = puzzelPrice * puzzelsCout;
    let totaltolkingDollsSum = tolkingDollPrice * tolkingDollsCount;
    let totalTeddyBearsSum = teddyBearPrice * teddyBearsCount;
    let totalMinionsSum = minionPrice * minionsCount;
    let totalTruckSum = truckPrice * trucksCount;

    let totalSum = totalPuzzelsSum + totaltolkingDollsSum + totalTeddyBearsSum + totalMinionsSum+ totalTruckSum;

    let totalItemsCount = puzzelsCout + tolkingDollsCount + teddyBearsCount + minionsCount + trucksCount;

    if (totalItemsCount >= 50)
    {
        totalSum *= 0.75;
    }
    let rent = totalSum * 0.1;
    let totalOutstandingSum = totalSum - rent;
    let restMoney = Math.abs(totalOutstandingSum - vacationPrice);

    if (totalOutstandingSum >= vacationPrice)
    {
        console.log(`Yes! ${restMoney.toFixed(2)} lv left.`)
    }
    else
    {
        console.log(`Not enough money! ${restMoney.toFixed(2)} lv needed.`)
    }
}
solve (["40.8", "20", "25", "30", "50", "10"])