const pairElement = string => {
    let finalArray = [];
    for (const char of string){
        if(char === "A"){
            let smallArray = [char,"T"];
            finalArray.push(smallArray) 
        } else if(char === "T"){
            let smallArray = [char,"A"];
            finalArray.push(smallArray) 
        } else if(char === "C"){
            let smallArray = [char,"G"];
            finalArray.push(smallArray) 
        } else if(char === "G"){
            let smallArray = [char,"C"];
            finalArray.push(smallArray) 
        }
    }
    return finalArray;
}