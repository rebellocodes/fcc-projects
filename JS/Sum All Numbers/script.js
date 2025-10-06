const sumAll = ([num1,num2]) => {
    let sum =0;
    if(num1<num2){
        sum = num1;
        console.log(sum)
        for(let i=num1+1;i<=num2;i++){
            sum = sum + i;
            console.log(sum)
        }
    } else if(num1>num2){
        sum = num1;
        for(let i=num1-1;i>=num2;i--){
            sum = sum + i;
            console.log(sum)
        }
    }
    return sum
}