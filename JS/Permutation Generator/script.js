const permuteString = (str) => {
    if (str.length === 1 ) {
        return [str];
        
    }
    if (str.length === 0) {
        return [""]
    } else {
        let array = [];
        for (let i = 0; i < str.length; i++){
            const prefix = str[i];
            const remainingChars = str.slice(0, i) + str.slice(i + 1);
            const subPermutations = permuteString(remainingChars);
            for (const permutation of subPermutations) {
                array.push(prefix + permutation)
            }

        }
        return Array.from(new Set(array))
    }
}