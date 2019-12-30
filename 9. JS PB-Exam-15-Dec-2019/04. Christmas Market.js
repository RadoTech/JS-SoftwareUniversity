function solve(input) {
    let budget = Number(input.shift());
    let command = input.shift();
    let basket = 0;
    let itemsCounter = 0;
    let lastItemPrice = 0;
    let discount = 0.7;
    while (command != "Finish") {
        if (command == "Star") {
            itemsCounter++;
            if (itemsCounter % 3 == 0) {
                basket += (5.69 * discount);
                lastItemPrice = (5.69 * discount);
            }
            else if (itemsCounter % 3 != 0) {
                basket += 5.69;
                lastItemPrice = 5.69;
            }
        }
        else if (command == "Angel") {
            itemsCounter++;
            if (itemsCounter % 3 == 0) {
                basket += (8.49 * discount);
                lastItemPrice = (8.49 * discount);
            }
            else if (itemsCounter % 3 != 0) {
                basket += 8.49;
                lastItemPrice = 8.49;
            }
        }
        else if (command == "Lights") {
            itemsCounter++;
            if (itemsCounter % 3 == 0) {
                basket += (11.20 * discount);
                lastItemPrice = (11.20 * discount);
            }
            else if (itemsCounter % 3 != 0) {
                basket += 11.20;
                lastItemPrice = 11.20;
            }
        }
        else if (command == "Wreath") {
            itemsCounter++;
            if (itemsCounter % 3 == 0) {
                basket += (15.50 * discount);
                lastItemPrice = (15.50 * discount);
            }
            else if (itemsCounter % 3 != 0) {
                basket += 15.50;
                lastItemPrice = 15.50;
            }
        }
        else if (command == "Candle") {
            itemsCounter++;
            if (itemsCounter % 3 == 0) {
                basket += (3.59 * discount);
                lastItemPrice = (3.59 * discount);
            }
            else if (itemsCounter % 3 != 0) {
                basket += 3.59;
                lastItemPrice = 3.59;
            }
        }
        if (basket > budget) {
            itemsCounter--;
            console.log(`Not enough money! You need ${(basket - budget).toFixed(2)}lv more.`);
            console.log(`${itemsCounter} items -> ${(basket - lastItemPrice).toFixed(2)}lv spent.`);
            return;
        }
        command = input.shift();
    }
    console.log(`Congratulations! You bought everything!`);
    console.log(`${itemsCounter} items -> ${basket.toFixed(2)}lv spent.`);
}
solve(["40", "Candle", "Star", "Wreath", "Lights", "Finish"])
//solve(["30", "Wreath", "Lights", "Star"])