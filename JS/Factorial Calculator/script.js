let num = 20;
const factorialCalculator = num => {
    let result = 1;
    for(let i =1;i<=num;i++){
        result *= i;
    }
    return result;
}
let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`
console.log(resultMsg)
