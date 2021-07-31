// Assignment Code
//Defining the global variables
var generateBtn = document.querySelector("#generate");

//Global placeholder variables for the password's character set
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var specialchar = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
var passLen = 0;
var charactersSet = '';

// Write password to the #password input
function writePassword() {
	//Promting user for password length
	var passlength = prompt("Enter the preferred password length");
	//Checking if password is not a number using isNaN
	if(isNaN(passlength)){
		alert("The password length must be a number");
	}
	else{
		//Parsing the password
		passLen = Number(passlength);
		//Checking if the password is less than 8 characters
		if(passLen < 8){
			alert("Password must be larger than 8 characters");
		}
		//Checking if password is more than 128 characters
		else if(passLen > 128){
			alert("Password must be less than 128 characters");
		}
		//The password satisfies the length i.e. between 8 and 128 characters
		else{
			var upper = confirm("Do you want to include uppercase letters?");
			if (upper == true) {
				charactersSet = charactersSet + uppercase;
			} 	
			var lower = confirm("Do you want to include lowercase letters?");
			if(lower == true){
				charactersSet = charactersSet + lowercase;
			}
			var numeric = confirm("Do you want to include numbers?");
			if(numeric == true){
				charactersSet = charactersSet + numbers;
			}
			var special = confirm("Do you want to include special characters?");
			if(special == true){
				charactersSet = charactersSet + specialchar;
			}
			if(charactersSet.length <= 1){
				alert("Please select at leat one condition \ne.g numbers, uppercase, lowercase or special characters");
			}
			else{
				var genpassword = generatePassword();
				var passwordText = document.querySelector("#password");			
				passwordText.innerHTML = genpassword;
			}
		}
	}

}
//function to generate password
function generatePassword(){
	//Creating the password placeholder 
	var pass = '';
	//Generating the password string using random function
	for (i =1; i<= passLen; i++){
		var Char = Math.floor(Math.random() * charactersSet.length + 1);
		//Updating the password value with the generated random string
		pass += charactersSet.charAt(Char);
	}
	return pass;
}

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
