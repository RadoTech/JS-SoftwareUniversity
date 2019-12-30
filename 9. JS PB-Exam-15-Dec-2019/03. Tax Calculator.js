function solve(input) {
    let enginePowerKW = Number(input.shift());
    let town = input.shift();
    let ecoStandard = input.shift();
    let tax = 0;
    if (town == "Sofia") {
        if (enginePowerKW <= 37) {
            tax = 1.43 * enginePowerKW;
        }
        else if (enginePowerKW >= 38 && enginePowerKW <= 55) {
            tax = 1.50 * enginePowerKW;
        }
        else if (enginePowerKW > 55) {
            tax = 2.68 * enginePowerKW;
        }
    }
    else if (town == "Vidin") {
        if (enginePowerKW <= 37) {
            tax = 1.34 * enginePowerKW;
        }
        else if (enginePowerKW >= 38 && enginePowerKW <= 55) {
            tax = 1.40 * enginePowerKW;
        }
        else if (enginePowerKW > 55) {
            tax = 2.54 * enginePowerKW;
        }
    }
    else if (town == "Varna") {
        if (enginePowerKW <= 37) {
            tax = 1.37 * enginePowerKW;
        }
        else if (enginePowerKW >= 38 && enginePowerKW <= 55) {
            tax = 1.40 * enginePowerKW;
        }
        else if (enginePowerKW > 55) {
            tax = 2.57 * enginePowerKW;
        }
    }
    if (ecoStandard == "Euro 4") {
        tax *= 0.85;
    }
    else if (ecoStandard == "Euro 5") {
        tax *= 0.83;
    }
    else if (ecoStandard == "Euro 6") {
        tax *= 0.80;
    }
    console.log(`${tax.toFixed(2)} lv`)
}
solve(["29", "Sofia", "Euro 4"])