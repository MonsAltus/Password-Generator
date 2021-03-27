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

// Clicking "Generate Password" on the page runs this function and returns a unique password.
function generatePassword() {
    // Character type assets. 
    const lowerAssets = "abcdefghijklmnopqrstuvwxyz";
    const upperAssets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberAssets = "0123456789";
    const specialAssets = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    // User is prompted to select character types.
    var includeLowerCase = window.confirm("Do you want to include lower case letters?")
    var includeUpperCase = window.confirm("Do you want to include upper case letters?")
    var includeNumbers = window.confirm("Do you want to include numbers?")
    var includeSpecial = window.confirm("Do you want to include special characters?")
    // If no character types are selected user will be alerted and prompted to select character types again.
    if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecial) {
        window.alert("You must select at least one character type!")
        includeLowerCase = window.confirm("Do you want to include lower case letters?")
        includeUpperCase = window.confirm("Do you want to include upper case letters?")
        includeNumbers = window.confirm("Do you want to include numbers?")
        includeSpecial = window.confirm("Do you want to include special characters?")
    }
    // User is prompted to select password length.
    var passwordLength = Number(window.prompt("Select password length. Length must be between 8 and 128 characters."))
    // If length entry is not a number or is outside of range user will be alerted and prompted to enter length again.
    if (isNaN(passwordLength)) {
        window.alert("Entry must be a number!")
        passwordLength = Number(window.prompt("Length must be a number between 8 and 128 characters."))
    }
    if (passwordLength<8 || passwordLength>128) {
        window.alert("Length must be between 8 and 128!")
        passwordLength = Number(window.prompt("Length must be a number between 8 and 128 characters."))
    }

    // Add user selecter character types to one large string.
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

    //Generates password from user selected characters and length.
    var passwordOutput = ""
    for (var i=0; i<passwordLength; i++) {
        passwordOutput = passwordOutput.concat(selectedChars[Math.floor(Math.random()*selectedChars.length)])
    }

    // DEBUGGING
    console.log("includeLowerCase = " + includeLowerCase)
    console.log("includeUpperCase = " + includeUpperCase)
    console.log("includeNumbers = " + includeNumbers)
    console.log("includeSpecial = " + includeSpecial)
    console.log("passwordLength type and value = " + typeof passwordLength + passwordLength)
    console.log("selectedChars = " + selectedChars)
    console.log("passwordOutput = " + passwordOutput)

    return passwordOutput;
// End function generatePassword
}