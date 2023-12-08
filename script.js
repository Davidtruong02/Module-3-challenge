// Assignment Code
var generateBtn = document.querySelector("#generate");


// I know I need variables for the lowercase, uppercase, numbers and special characters


// Need a function to generate the password
function generatePassword() {
  var password = "";
  var characters = "";
  var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  var passwordLength;
  while (true) {
    passwordLength = prompt("Please enter your desired password length between 8 and 128 characters.");
    // if the password length is not between 8 and 128 I want it the code to return and make the user enter a valid value.
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Invalid password length. Please enter a number between 8 and 128.");
    } else {
      break;
    }
  }

  /* needed the variables to be true and if they are truthy the code
     will run and characters would be pulled for each variable string 
     ie lowerCaseChar a,b,c,d etc.. and same for the rest
  */
  var lowerCaseConfirm= confirm("Would you like to include lowercase characters in your password?")
  var upperCaseConfirm = confirm("Would you like to include uppercase characters in your password?")
  var specialConfirm = confirm("Would you like to include special characters in your password?")
  var numberConfirm = confirm("Would you like to include number characters in your password?")
     
  if (lowerCaseConfirm) {
    characters += lowerCaseChar.join("");
  }
  if (upperCaseConfirm) {
    characters += upperCaseChar.join("");
  }
  if (specialConfirm) {
    characters += specialChar.join("");
  }
  if (numberConfirm) {
    characters += numberChar.join("");
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}


//Need windows to prompt the length of password to be least 8 to 128 characters


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}


//array of special character,uppercase,lowercase, numbers.
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




