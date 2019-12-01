function solve(input)
{
    let bookName = input.shift();
    let allBooksSum = Number(input.shift());
    let bookSearch = input.shift();

    let bookCounter = 0;
    let bookFound = false;

    while (bookSearch != bookName)
    {
        bookCounter++;
        if ((bookCounter == allBooksSum) && !bookFound)
        {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${bookCounter} books.`);
            return;
        }

        bookSearch = input.shift();
        if (bookSearch == bookName)
        {
            bookFound = true;
            break;
        }
    }
    console.log(`You checked ${bookCounter} books and found it.`)
}
solve(["Bourne", "32", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"])