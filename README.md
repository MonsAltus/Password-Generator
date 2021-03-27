# Password-Generator
A project to create unique passwords using JavaScript.

### Description:
This page is designed to generate unique passwords in accordance with the following user selected criteria:
- Passwords can contain lower case letters, upper case letters, numbers, and/or special characters.
- Passwords can be any length between 8 and 128 characters.

#### Pseudocode:
This is my first experience in creating what I felt was decent pseudocode before starting a project, so I'll share that here.
- Create 4 booleans: includeLowerCase, includeUpperCase, includeNumbers, includeSpecial.
- Create number var passwordLength.
- Booleans and passwordLength are defined by user in prompts for password criteria.
- Create 4 strings: lowerAssets, upperAssets, numberAssets, specialAssets.
- Create var selectedChars. Concat user selected character assets into selectedChars.
- Create empty string for var passwordOutput
- Create for loop to concat random chars from selectedChars to passwordOutput until it reaches passwordLength.
- return generated password "passwordOutput" on web page.

### Links:
[Website preview](./images/preview.png)<br>
[Link to deployed website](https://monsaltus.github.io/Password-Generator/)

### Changelog:
#### index.html:
#### style.css:
#### script.js:
- Added if statments to insure password length is a number within acceptable ranges, and at least one character catagory has been selected.
- Cleaned up spacing, indentation, and comments.
- Changed if statements on input checks to while statements.