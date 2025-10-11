// const truthCheck = (array, string) => {
//     let foundKey;
//     let finalArray = [];
//     let finalValue = true;
//     for (const obj of array) {
//         let keys = Object.keys(obj);
//         for (const key of keys) {
//             if (key === string) {
//                 foundKey = key
//             } 
            
//         }
        
        
//     }
//     console.log(foundKey)
//     for (const object of array) {
//         console.log(object[foundKey])
//         finalArray.push(object[foundKey])
//     }
//     console.log(finalArray)
//     for (const value of finalArray) {
//         if (Boolean(value) === false) {
//             finalValue =  false
//         }
//     }
//     return finalValue
// }
    
const truthCheck = (array, string) => {
    array.every(obj => {
        return Boolean(obj[string])
    })
}

