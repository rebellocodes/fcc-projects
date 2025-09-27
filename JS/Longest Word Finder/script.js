
const findLongestWordLength = string => {
    let trimmedSentence = string.trim().split(" ");
    let max = trimmedSentence[0].length;
    for (let i=1;i < trimmedSentence.length;i++){
        if(trimmedSentence[i].length > max){
            max = trimmedSentence[i].length;
        }
    }

return max;
    
}