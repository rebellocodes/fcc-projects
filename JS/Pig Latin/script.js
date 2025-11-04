const translatePigLatin = string => {
    let vowelRegex = /^[aeiou]/;
    let consonantRegex = /^[bcdfghjklmnpqrstvwxyz]+/
    if (vowelRegex.test(string)) {
        return `${string}way`
    } else if (consonantRegex.test(string)) {
        return `${string.replace(consonantRegex,"")}${string.match(consonantRegex)}ay`
    }
}