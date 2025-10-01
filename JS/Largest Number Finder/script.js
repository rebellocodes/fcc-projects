const largestOfAll = array => {
    let finalArray = [];
    for(const arr of array){
        let largeNumberInArray = arr[0];
        for(let i=1;i<arr.length;i++){
            if(largeNumberInArray<arr[i]){
                largeNumberInArray = arr[i];    
            }
        }
        finalArray.push(largeNumberInArray)
        
    }
    return finalArray;
}