// Access all the elements and assign variables
const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");


const getFlags = () => {
    if (caseInsensitiveFlag.checked && globalFlag.checked) {
        return "ig"
    } else if (caseInsensitiveFlag.checked && !globalFlag.checked) {
        return "i"
    } else if (!caseInsensitiveFlag.checked && globalFlag.checked) {
        return "g"
    } else {
        return ""
    }
}

    
testButton.addEventListener('click', () => {
    const originalText = stringToTest.textContent;
    const currentFlags = getFlags();
    const globalFlags = currentFlags.includes('g') ? currentFlags : currentFlags + 'g';
    let regexObject = new RegExp(regexPattern.value, globalFlags);
    
    let foundMatches = originalText.match(regexObject);
    console.log(foundMatches)
    stringToTest.innerHTML = originalText;
    testResult.innerHTML = "";
    if (!foundMatches) {
        testResult.textContent = "no match"
    } else {
        
            let highlightedString = originalText.replace(regexObject, (match) => {
                return `<span class="highlight">${match}</span>`
            })
            stringToTest.innerHTML = highlightedString;
        
        
        testResult.innerHTML = foundMatches.join(", ")
    }
    }
)