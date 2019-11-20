function solve (input)
{
    let inputPass = input.shift();

    let storedPass = "s3cr3t!P@ssw0rd";

    if (inputPass == storedPass)
    {
        console.log(`Welcome`)
    }
    else
    {
        console.log(`Wrong password!`)
    }
}
solve (["qwerty"])