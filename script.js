// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays containing different types of characters for password generation
var lowercaseChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var uppercaseChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numberChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChars = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Initialised empty arrays to store randomly generated characters and password
var randomCharsArr = [];
var randomPasswordArr = [];

// While loop counters
var counter = 0;
var i = 0;

// Function to generate random password based on the criterias
function generatePassword() {
  // Prompts user for password length
  var passwordLength = prompt(
    "Please enter the desired password length. It must be between 8 and 128 characters inclusive."
  );
  // Validate password length
  if (passwordLength >= 8 && passwordLength <= 128) {
    // Confirm inclusion of character types

    var includeLowercase = confirm(
      "Include lowercase characters? OK for yes, Cancel for no."
    );

    var includeUppercase = confirm(
      "Include uppercase characters? OK for yes, Cancel for no."
    );

    var includeNumeric = confirm(
      "Include numeric characters? OK for yes, Cancel for no."
    );

    var includeSpecial = confirm(
      "Include special characters? OK for yes, Cancel for no."
    );

    // Generate random characters based on user criteria
    // l, u, n and s are all random index numbers for lower, upper, number and special characters
    while (counter < passwordLength) {
      if (includeLowercase) {
        var l = Math.floor(Math.random() * lowercaseChars.length);
        var randomLower = lowercaseChars[l];
        randomCharsArr.push(randomLower);
        counter++;
      }
      if (includeUppercase) {
        var u = Math.floor(Math.random() * uppercaseChars.length);
        var randomUpper = uppercaseChars[u];
        randomCharsArr.push(randomUpper);
        counter++;
      }
      if (includeNumeric) {
        var n = Math.floor(Math.random() * numberChars.length);
        var randomNumber = numberChars[n];
        randomCharsArr.push(randomNumber);
        counter++;
      }
      if (includeSpecial) {
        var s = Math.floor(Math.random() * specialChars.length);
        var randomSpecial = specialChars[s];
        randomCharsArr.push(randomSpecial);
        counter++;
      }
    }
    console.log(randomCharsArr, "<-------");

    // Shuffle the characters to create random password
    while (i < passwordLength) {
      var x = Math.floor(Math.random() * randomCharsArr.length);
      var randomSelectedChar = randomCharsArr.splice(x, 1)[0];
      randomPasswordArr.push(randomSelectedChar);
      i++;
    }
    console.log(randomPasswordArr, "<<<<<<<<");

    // Convert array to string
    var randomGeneratedPassword = randomPasswordArr.join("");
    console.log(randomGeneratedPassword, "**********");

    // Display generated password to user
    alert(`Your random generated password is: ${randomGeneratedPassword}🔑`);
    return randomGeneratedPassword;
  } else {
    // Display error message for invalid password length
    alert("‼️ Password length must be between 8 and 128 characters.");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
