function solve(input) {
    let budget = Number(input.shift());
    let skiPrice = Number(input.shift());
    let cheeksPrice = Number(input.shift());
    let skiBootsPrice = skiPrice * 0.4;
    let skiOutfitPrice = skiPrice * 1.4;
    let skiEquipment = skiPrice + skiBootsPrice + skiOutfitPrice;
    if (skiEquipment > 800) {
        cheeksPrice = 0;
    }
    let totalSkiEquipmentPrice = skiEquipment + cheeksPrice;
    let restBudget = Math.abs(budget - totalSkiEquipmentPrice);
    if (budget >= totalSkiEquipmentPrice) {
        console.log(`Angel's sum is ${totalSkiEquipmentPrice.toFixed(2)} lv. He has ${restBudget.toFixed(2)} lv. left.`)  
    }
    else if (budget < totalSkiEquipmentPrice) {
        console.log(`Not enough money! You need ${restBudget.toFixed(2)} leva more!`)
    }
}
solve(["1950.50", "525.99", "69.99"])