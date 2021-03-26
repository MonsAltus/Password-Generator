// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    //defines passwordText as the ID'd <textarea> in page
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}


function generatePassword() {
    const lowerAssets = "abcdefghijklmnopqrstuvwxyz";
    const upperAssets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    // const upperAssets = lowerAssets.toUpperCase()
    const numberAssets = "0123456789";
    const specialAssets = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    var includeLowerCase = window.confirm("Do you want to include lower case letters?")
    var includeUpperCase = window.confirm("Do you want to include upper case letters?")
    var includeNumbers = window.confirm("Do you want to include numbers?")
    var includeSpecial = window.confirm("Do you want to include special characters?")
    var passwordLength = window.prompt("Select password length. Length must be between 8 and 128 characters.")

    // Converts var passwordLength from a string to a number
    passwordLength = +passwordLength;

    if (isNaN (passwordLength)) {
    passwordLength = window.prompt("Length must be a NUMBER between 8 and 128.")
    }

    // Add character assets to one large string of user selected criteria.
    var selectedChars = ""
    if (includeLowerCase === true) {
        selectedChars = selectedChars.concat(lowerAssets)
    }
    if (includeUpperCase === true) {
        selectedChars = selectedChars.concat(upperAssets)
    }
    if (includeNumbers === true) {
        selectedChars = selectedChars.concat(numberAssets)
    }
    if (includeSpecial === true) {
        selectedChars = selectedChars.concat(specialAssets)
    }

    //Generate password from user selected characters and length.
    var passwordOutput = ""
    for (var i=0; i<passwordLength; i++) {
        passwordOutput = passwordOutput.concat(selectedChars[Math.floor(Math.random()*selectedChars.length)])
    }

// DEBUGGING
    console.log("includeLowerCase = " + includeLowerCase)
    console.log("includeUpperCase = " + includeUpperCase)
    console.log("includeNumbers = " + includeNumbers)
    console.log("includeSpecial = " + includeSpecial)
    console.log("passwordLength type and value= " + typeof passwordLength + passwordLength)
    console.log("selectedChars = " + selectedChars)
    console.log("passwordOutput = " + passwordOutput)

    return passwordOutput;
// End function generatePassword()
}


// -----  PSEUDOCODE:   ------------------------------------- 
// Create 4 booleans: includeLowerCase, includeUpperCase, includeNumbers, includeSpecial
// Create number var passwordLength
// Booleans and passwordLength are defined by user in prompts for password criteria

// Create 4 strings: lowerAssets, upperAssets, numberAssets, specialAssets)
// Create var selectedChars. concatinate user selected asset strings into selectedChars
// Create empty string for var passwordOutput
// Create for loop to concat random chars from selectedChars string to passwordOutput until it reaches passwordLength.
// return generated password "passwordOutput" on web page.