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
  }
  return pass; 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Prompting user for password length
function writePassword() {
  var passlength = prompt("Enter the preferred password length");
  //checking if password is not a number using isNaN
  if (isNaN(passlength)){
    alert("The password length must be a number");
  }
  else{
    var passLen = Number(passlength); 
  }
}
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
