function solve (input)
{
    let L = Number(input.shift());
    let W = Number(input.shift());
    let A = Number(input.shift());

    let hallArea = (L*100) * (W*100);
    let wardrobeArea = (A*100) * (A*100);
    let benchArea = hallArea * 0.1;
    let hallUsableArea = hallArea - wardrobeArea - benchArea;
    let oneDanceFreeMoving = 40 + 7000;
    let allDancersCount = hallUsableArea / oneDanceFreeMoving;

    console.log(`${Math.floor(allDancersCount)}`)
}
solve ([50,25,2])