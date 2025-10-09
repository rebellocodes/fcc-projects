const diffArray = (arr1,arr2) => {
    
    let filteredArray = arr1.filter(value => !arr2.includes(value))
    let filteredArray2 = arr2.filter(value => !arr1.includes(value))
    return filteredArray.concat(filteredArray2)
}
    

