const titleCase = string => {
    let array = string.toLowerCase().split(" ");
    let capitalisedArray = [];
    for(const arr of array){
            let firstChar = arr[0].toUpperCase();
            let restChar = arr.substring(1,arr.length);
            let fullString = firstChar + restChar;
            capitalisedArray.push(fullString);
        }
    return capitalisedArray.join(" ")  ;  
}
    