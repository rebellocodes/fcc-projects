// target elements by ID adn assign to variable

const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result")



checkBtn.addEventListener('click', () => {
    if (textInput.value === "") {
        alert("Please input a value")
    } else {
        checkPalindrome(textInput.value)
    }
})

const checkPalindrome = msg => {
    const cleanString = msg.toLowerCase().replace(/[^0-9a-z]/g, "");

    const reversedString = cleanString.split("").reverse().join("");

    if (cleanString === reversedString) {
        result.textContent = `${msg} is a palindrome`
    } else {
        result.textContent = `${msg} is not a palindrome`
    }
}
