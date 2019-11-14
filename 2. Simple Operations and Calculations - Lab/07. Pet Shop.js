function petShop (input)
{
    let dogCounts = input.shift();
    let otherAnimalsCount = input.shift();

    let dogFoodPrice = 2.5;
    let otherFoodPrice = 4;

    let totalPrice = (dogCounts * dogFoodPrice) + (otherAnimalsCount * otherFoodPrice)

    console.log(`${totalPrice.toFixed(2)} lv.`)
}
petShop([13,9])