// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordLength;
var isNumbers = false;
var isSpecialCharacters = false;
var isUpperCase = false;
var isLowerCase = false;
var isValidCrit = false;
var specialCharacters = ~`#$%^&*()_+-=[{]}\\|;:'",<.>/?]`;
//var password = generatePassword;

console.log (isNumbers)
console.log(isUpperCase)
console.log(isLowerCase)



//confirming data aka typeof
function checkTypeof(data){
  return typeof data ;
}

//return password length
function getPasswordLength(){

  
  //starter question
   passwordLength= prompt("Your password must be between 8-128 characters; \n How long would you like it to be?");
  
  if (passwordLength >= 8 && passwordLength<=128 ){
    isUpperCase = confirm ("Would you like the password to contain uppercase letters?");
    isLowerCase =confirm ("Would you like the password to contain lowercase letters?");
    confirm ("Would you like the password to contain special charater / symbols?");
    isNumbers = confirm ("Would you like the password to contain numbers?");
    console.log (isNumbers)
    console.log(isUpperCase)
    console.log(isLowerCase)
  }
else{
  alert ("Pasword must be between 8-128 characters")
}





} //get password length then confirm
function isValidNum (num) {
if (typeof num === 'number' && num >8 && num <= 128 ) {
//console.log ("true");
return true;
}
else{
  //console.log("false");
  return false;
}

}//stop output checker

//function includeUpperCase(){
  //confirm ("Would you like the password to contain uppercase letters?");
//}
//function includeLowerCase(){
  //confirm ("Would you like the password to contain lowercase letters?");
//}
//function includeSpecialCharacters(){
  //confirm ("Would you like the password to contain special charater / symbols?");
//}

//function includeNumbers(){
  //confirm ("Would you like the password to contain numbers?");
//}


//verify minimum criteria is true 
function isValidCrit(isNum, isSpecial, isUpper, isLower){
  if (isNum||isSpecial||isUpper||isLower){
   return true;
  }
     else{
       return false
     }
   }

   
  
   function randomNumber (){
     return Math.floor(Math.random() * 8);
   }
// Write password to input
function writePassword() {

  passwordLength =getPasswordLength();
  isSpecialCharacters =includeSpecialCharacters();
  isUpperCase = includeUpperCase();
  isLowerCase = includeLowerCase();
  isNumbers = includeNumbers();

  if (isValidCrit(isSpecialCharacters, isUpperCase, isLowerCase, isNumbers)){
    var passwordText =document.querySelector("#password");

  }
  else{
    window.alert("Your password must contain minimally \n an uppercase, lowercase, number and special charater. ")
  }


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);