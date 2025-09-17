let email = "victor.rebello@gmail.com";

const maskEmail = email => {
    let domainIndex = email.indexOf("@");
    let domain = email.substring(domainIndex);
    let userName = email.substring(0,domainIndex);
    let maskLetters =userName.substring(1,userName.length-1);
    let maskLength = maskLetters.length;
    return userName.charAt(0) + "*".repeat(maskLength) + userName.charAt(userName.length-1) + domain;
}
console.log(maskEmail(email));