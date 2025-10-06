const generatePassword = length => {
let output = ""
let stringMixed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
console.log(stringMixed.length);

for(let i=0;i<length;i++){
    output += stringMixed.charAt(Math.floor(Math.random()*stringMixed.length))
}

return output
}
let password = generatePassword(7);
console.log(`Generated password: ${password}`)