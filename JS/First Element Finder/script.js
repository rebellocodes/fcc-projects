const findElement = (array,func) => {
    for(const arr of array){
        if(func(arr) === true){
            return arr;
        }
    }
    return undefined;
}