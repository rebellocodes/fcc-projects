const fearNotLetter = string => {
    let alphabetString ="abcdefghijklmnopqrstuvwxyz";
    let array = string.split("");
    let start = alphabetString.indexOf(array[0]);
    for(let i=0;i<array.length;i++){
        if(array[i] !== alphabetString[start + i]){
            return alphabetString[start + i]
        }
    }
    
    return undefined;
}