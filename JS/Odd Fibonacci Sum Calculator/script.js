const sumFibs = number => {
    let array = [0,1];
    let finalValue = 0;
    for(let i=0;i<number-1;i++){
        let sum = array[array.length-1] + array[array.length -2];
        console.log(sum)
        array.push(sum)
    }
    console.log(array)
    for(const char of array){
        if(char%2 !== 0 && char<=number){
            finalValue = finalValue + char;
    }
    
}
return finalValue   
}