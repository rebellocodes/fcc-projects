let inputText = document.getElementById("text-input");
let counterText = document.getElementById("char-count")
let counterNumber = parseInt(counterText.textContent.split(": ")[1].split("/")[0]);

inputText.addEventListener('input', () => {
    if (inputText.value.length < 50) {
        counterText.textContent = `Character Count: ${inputText.value.length}/50`;  
        counterText.classList.remove("error")
        
    } else if (inputText.value.length === 50) {
        counterText.classList.add("error")
        counterText.textContent = `Character Count: ${inputText.value.length}/50`; 
    } else if (inputText.value.length > 50) {
        counterText.classList.add("error");
        inputText.value = inputText.value.slice(0,50)
    }

})



