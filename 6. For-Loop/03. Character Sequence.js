function solve (input)
{
    let word = input.shift();
    for (let index = [0]; index < word.length; index++)
    {
        let letter = word[index];
        console.log(`${letter}`);
    }
}
solve(["softuni"])