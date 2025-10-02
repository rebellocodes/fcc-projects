const frankenSplice = (arr1,arr2,index) => {
    let copiedArray = arr2.slice();
    copiedArray.splice(index,0,...arr1);  
    return copiedArray; 
}
