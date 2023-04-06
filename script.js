// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



 // Variables to store available characters for password generation
 var lowercase = "abcdefghijklmnopqrstuvwxyz";
 var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var numeric = "0123456789";
 var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
 
//Password Characters Variables
function generatePassword() {
  // Prompt user for password criteria
  var passwordLength = prompt("How long do you want the password? (8 Char Min - 128 Char Max");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Try again.");
    return " ";
  }

  var includeLowercase = confirm("Click OK to confirm including lowercase letters ");
  var includeUppercase = confirm("Click OK to confirm including uppercase letters ");
  var includeNumeric = confirm("Click OK to confirm including numbers ");
  var includeSpecial = confirm("Click OK to confirm including symbols ");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one type of character to include in your password.");
    return " ";
  }

 

  // Variable to store selected characters for password generation
  var characters = "";
  if (includeLowercase) {
    characters += lowercase;
  }
  if (includeUppercase) {
    characters += uppercase;
  }
  if (includeNumeric) {
    characters += numeric;
  }
  if (includeSpecial) {
    characters += special;
  }

  // Generate password using selected criteria
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  // Return generated password
  return password;
}
