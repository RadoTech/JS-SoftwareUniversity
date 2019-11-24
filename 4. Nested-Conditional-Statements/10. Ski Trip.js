function solve (input) {
    let daysVacation = Number(input.shift());
    let roomType = input.shift();
    let evaluation = input.shift();

    let nights = daysVacation - 1;
    let sum = 0.00

    if (nights < 10) {
        if  (roomType == "room for one person") {
            sum = 18.00 * nights; 
        }
        else if (roomType == "apartment") {
            sum = (25.00 * nights) * 0.7
        }
        else if (roomType == "president apartment") {
            sum = (35.00 * nights) * 0.9
        }
    }
    else if (nights >= 10 && nights <= 15) {
        if  (roomType == "room for one person") {
            sum = 18.00 * nights; 
        }
        else if (roomType == "apartment") {
            sum = (25.00 * nights) * 0.65
        }
        else if (roomType == "president apartment") {
            sum = (35.00 * nights) * 0.85
        }
    }
    else if (nights > 15) {
        if  (roomType == "room for one person") {
            sum = 18.00 * nights; 
        }
        else if (roomType == "apartment") {
            sum = (25.00 * nights) * 0.50
        }
        else if (roomType == "president apartment") {
            sum = (35.00 * nights) * 0.80
        }
    }
    if (evaluation == "positive") {
        sum *= 1.25;
    }
    else if (evaluation == "negative") {
        sum *= 0.9;
    }
    console.log(`${sum.toFixed(2)}`)
}
solve(["14", "apartment", "positive"])