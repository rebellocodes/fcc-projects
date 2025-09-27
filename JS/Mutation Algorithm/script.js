const mutation = array => {
    let firstArrayItem = array[0].toLowerCase();
    let secondArrayItem = array[1].toLowerCase();
    let result;
    for (const char of secondArrayItem.split("")){
        if(!firstArrayItem.includes(char)){
            return false
        } 
    }
    return true;
}