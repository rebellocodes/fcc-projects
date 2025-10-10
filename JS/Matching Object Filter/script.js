const whatIsInAName = (array, object) => {
    const objectKeys = Object.keys(object)
    return array.filter(obj => {
        let isMatch = true;
        for (const key of objectKeys) {
            if (!obj.hasOwnProperty(key) || obj[key] !== object[key]) {
                isMatch = false
                break;
            }
        }
        return isMatch
    })
}

