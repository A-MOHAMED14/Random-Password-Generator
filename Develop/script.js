// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt(
    "Please enter the desired password length. It must be between 8 and 128 characters inclusive."
  );

  var includeLowercase = confirm(
    "Include lowercase characters? OK for yes, Cancel for no."
  );

  var includeUppercase = confirm(
    "Include uppercase characters? OK for yes, Cancel for no."
  );

  var includeNumeric = confirm(
    "Include numeric characters? OK for yes, Cancel for no."
  );

  var includeSpecialCharacters = confirm(
    "Include special characters? OK for yes, Cancel for no."
  );

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
