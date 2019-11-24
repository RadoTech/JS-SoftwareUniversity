function solve (input){
    let product = input.shift();
    let dayOfTheWeek = input.shift();
    let quantity = Number(input.shift());
    var workDay = (dayOfTheWeek == "Monday" || dayOfTheWeek == "Tuesday" || dayOfTheWeek == "Wednesday" || dayOfTheWeek == "Thursday" || dayOfTheWeek == "Friday");
    var weekEnd = (dayOfTheWeek == "Saturday" || dayOfTheWeek == "Sunday");
    let basket = 0.00;
    let error = false;
    if (workDay) {
        switch (product) {
            case "banana": basket += (2.50 * quantity); break;
            case "apple": basket += (1.20 * quantity); break;
            case "orange": basket += (0.85 * quantity); break;
            case "grapefruit": basket += (1.45 * quantity); break;
            case "kiwi": basket += (2.70 * quantity); break;
            case "pineapple": basket += (5.50 * quantity); break;
            case "grapes": basket += (3.85 * quantity); break;
            default: error = true; break;
        }
    }
    else if (weekEnd) {
    switch (product) {
        case "banana": basket += (2.70 * quantity); break;
            case "apple": basket += (1.25 * quantity); break;
            case "orange": basket += (0.90 * quantity); break;
            case "grapefruit": basket += (1.60 * quantity); break;
            case "kiwi": basket += (3.00 * quantity); break;
            case "pineapple": basket += (5.60 * quantity); break;
            case "grapes": basket += (4.20 * quantity); break;
            default: error = true; break;
        }
    }
    else {
        error = true;
    }
    if (!error) {
        console.log(`${basket.toFixed(2)}`);
    }
    else if (error) {
        console.log(`error`);
    }
}
solve(["banana", "Monday", "2"])

