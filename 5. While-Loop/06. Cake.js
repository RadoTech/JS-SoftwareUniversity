function solve(input)
{
    let cakeWidth = Number(input.shift());
    let cakeLenght = Number(input.shift());
    let command = input.shift();

    let cakeVolume = cakeWidth * cakeLenght;
    let cakePiecesCounter = 0;

    while (command != "STOP")
    {
        cakePiecesCounter += Number(command);
        if (cakePiecesCounter > cakeVolume)
        {
            console.log(`No more cake left! You need ${cakePiecesCounter - cakeVolume} pieces more.`);
            return;
        }
        command = input.shift();
        if (command == "STOP")
        {
            break;
        }
    }
    console.log(`${cakeVolume - cakePiecesCounter} pieces are left.`)
}
solve(["10", "2", "2", "4", "6", "STOP"])