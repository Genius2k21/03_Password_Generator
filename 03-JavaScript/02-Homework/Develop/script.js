// Assignment Code
var generateBtn = document.querySelector("#generate");

//function to generate password
function generatePassword(){
  //Creating the password placeholder
  var pass = '';
  //Generating the password string using random function
  for (i=1; i<=passLen; i++){
    var Char = Math.floor(Math.random()*charactersSet.length + 1);
      //updating the password value with the generated random string
      pass +=charactersSet.charAT(Char);
      //comitting to Github.
  }
  return pass; 
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
