function solve (input)
{
let filmBudget = Number(input.shift());
let statistCount = Number(input.shift());
let oneOutfitPrice = Number(input.shift());

let decor = filmBudget * 0.1;
let outfitDiscount = 0.1;

let totalOutfitPrice = statistCount * oneOutfitPrice;
if (statistCount > 150)
{
    totalOutfitPrice -= (totalOutfitPrice * outfitDiscount)
}
let restMoney = Math.abs(filmBudget - (decor + totalOutfitPrice))

if ((decor + totalOutfitPrice) > filmBudget)
{
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${restMoney.toFixed(2)} leva more.`);
}
else if ((decor + totalOutfitPrice) <= filmBudget)
{
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${restMoney.toFixed(2)} leva left.`);
}
}
solve (["9587.88", "222", "55.68"])