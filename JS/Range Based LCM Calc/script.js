const smallestCommons = array => {
    let min = Math.min(array[0],array[1]);
    let max = Math.max(array[0],array[1]);
    let rangeArray = [];
    for (let i = min; i <= max; i++){
        rangeArray.push(i)
    }
    let multiple = max;
    let found = false;
    while (!found) {
        let isSCM = true;
        for (const num of rangeArray) {
            if (multiple % num !== 0) {
                isSCM = false;
                break;
            }

        }
        if (isSCM) {
            found = true;
        } else {
            multiple += max;
        }
    }
    return multiple
    
    
}