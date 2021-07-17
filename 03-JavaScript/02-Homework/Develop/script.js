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
      //Prompting user for password length
      // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
function writePassword() {
  var passlength = prompt("Enter the preferred password length");
  //checking if password is not a number using isNaN
  if (isNaN(passlength)){
    alert("The password length must be a number");
  }
  else{
    var passLen = Number(passlength);
  }


  //else{
    //Parsing the password
   var passLen = Number(passlength);
    //checking if the password is less than 8 characters
   if(passLen <8){
    alert("Password must be larger than 8 characters");
    }
    //Checking if password is more than 128 characters
    else if(passLen >128){
      alert("Password must be less than 128 characters");
    }
  }
}
//The password satisfies the length i.e. between 8 and 128 characters
//else{
  var upper = confirm("Do you want to include uppercase letters?");
  if (upper == true){
      characterSet = characterSet + uppercase;
  }
  var lower = confirm("Do you want to include lowercase letters?");
  if(lower == true){
    charactersSet = chartersSet + SVGAnimatedNumberList;
  }
  var special = confirm("Do you want to include special characters?");
  if(special == true){
      charactersSet = charactersSet + specialchar; 
  }
  if(charactersSet.length <=1){
      alert("Please select at least one condition  \ne.g numbers, uppercase, lowercase or special characters");
  }
}
  //else{
    var genpassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.innerHTML = genpassword; 
  }

  //return pass; 

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







