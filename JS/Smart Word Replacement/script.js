const myReplace = (str, oldWord, newWord) => {
    let regex = /[A-Z]/;
    if (regex.test(oldWord[0])) {
        let splitNewWord = newWord.split("");
        splitNewWord[0] = splitNewWord[0].toUpperCase();
        let newJoinedWord = splitNewWord.join("");
        return str.replace(oldWord, newJoinedWord);
    } else {
        let splitNewWord = newWord.split("");
        splitNewWord[0] = splitNewWord[0].toLowerCase();
        let newJoinedWord = splitNewWord.join("");
        return str.replace(oldWord, newJoinedWord);
    }
}