const uniteUnique = (...args) => {
    let newArray = [];
    let finalArray = [];
    for(const arg of args){
        for(let i=0;i<arg.length;i++){
            newArray.push(arg[i])
        }
    }
    for(let i=0;i<newArray.length;i++){
        if(!(finalArray.includes(newArray[i]))){
            finalArray.push(newArray[i])
            console.log(finalArray)
        }
    }
    return finalArray
}