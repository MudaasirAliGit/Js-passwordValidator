// Password Validator. 
// Prepared by Mudassir Ali.

let password = prompt("Please enter your password");

if(password.length >= 8){
    if(!/[a-zA-Z]/.test(password) || !/\d/.test(password))
    // I copy this above if condition from ChatGPT.
        {
        alert("Password must contain both letters and numbers.");
    }
    else{
        alert("Password is valid.");
    }    
}
else{
    alert("Password is too short.");
}
