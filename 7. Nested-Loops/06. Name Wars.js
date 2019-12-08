function solve(input)
{
let command = input.shift();
let ASCIIsum = 0; 
let maxASCII = 0
let winner = "N/A";
    while (command != "STOP")
    {
        for (let i = 0; i < command.length; i++)
        {
            let letter = command[i];
            ASCIIsum += letter.charCodeAt(0)
        }
            if (ASCIIsum > maxASCII)
                {
                    maxASCII = ASCIIsum;
                    winner = command;
                }
        ASCIIsum = 0;
        command = input.shift();
    }
    console.log(`Winner is ${winner} - ${maxASCII}!`)
}
solve(["Petar", "Georgi", "Stanimir", "STOP"])