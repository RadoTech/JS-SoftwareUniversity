function yardGreening (input)
{
    let sqMeters = input.shift();

    let oneSqMeterPrice = 7.61;
    let allSqMetersPrice = oneSqMeterPrice * sqMeters;
    let discount = allSqMetersPrice * 0.18;
    let totalPrice = allSqMetersPrice - discount;

    console.log(`The final price is: ${totalPrice.toFixed(2)} lv.`)
    console.log(`The discount is: ${discount.toFixed(2)} lv.`)
}
yardGreening ([135])