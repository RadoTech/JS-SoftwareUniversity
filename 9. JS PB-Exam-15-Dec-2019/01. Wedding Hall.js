function solve(input) {
    let hallLengthMeters = Number(input.shift());
    let hallWidthMeters = Number(input.shift());
    let barSideMeters = Number(input.shift());
    let hallArea = hallLengthMeters * hallWidthMeters;
    let barArea = barSideMeters * barSideMeters;
    let dancingArea = hallArea * 0.19;
    let onePersonArea = 3.2;
    let freeArea = (hallArea - barArea) - dancingArea; 
    let maxPersonsNum = Math.ceil(freeArea / onePersonArea);
    console.log(`${maxPersonsNum}`)
}
solve(["50", "25", "2"])