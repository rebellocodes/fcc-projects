const destroyer = (array,...args) => {
    let finalArray = array;
    for(const arg of args){
        finalArray = finalArray.filter(value => value !== arg)
        console.log(finalArray)
    }
    return finalArray;
}