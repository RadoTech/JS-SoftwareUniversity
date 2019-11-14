function concatenateData (input)
{
let firstName = input.shift();
let lastName = input.shift();
let age = input.shift();
let town = input.shift();

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`)
}
concatenateData(["Rado","Tech",38,"Stara Zagora"])