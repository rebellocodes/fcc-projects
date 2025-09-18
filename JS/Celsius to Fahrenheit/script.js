const convertCtoF = celsius => {
    let fahrenheit = parseInt(celsius * (9/5) + 32);
    return fahrenheit;
}
console.log(convertCtoF(20));