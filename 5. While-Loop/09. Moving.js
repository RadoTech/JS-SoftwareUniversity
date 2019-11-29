function solve(input)
{
    let roomWidth = Number(input.shift());
    let roomLength= Number(input.shift());
    let roomHight = Number(input.shift());
    let boxesCount = input.shift();

    let roomVolume = roomWidth * roomLength * roomHight;
    let boxesVolume = 0;
    let roomNeeded = 0;
    let roomLeft = 0;

    while (boxesCount != "Done")
    {
        boxesVolume += Number(boxesCount);
        if (boxesVolume > roomVolume)
        {
            roomNeeded = boxesVolume - roomVolume;
            console.log(`No more free space! You need ${roomNeeded} Cubic meters more.`);
            return;
        }
         boxesCount = input.shift();
        if (boxesCount == "Done")
        {
            break;
        }
    }
    roomLeft = roomVolume - boxesVolume;
    console.log(`${roomLeft} Cubic meters left.`)

}
solve(["10", "1", "2", "4", "6", "Done"])