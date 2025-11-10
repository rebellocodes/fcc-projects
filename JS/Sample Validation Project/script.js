const submitForm = document.getElementById("submit");
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error")

submitForm.addEventListener('click', (e) => {
    e.preventDefault();

    let isNameValid = validateName();
    let isEmailValid = validateEmail()
    
    if (isEmailValid && isNameValid) {
        alert("Form Submittedd Successfully");
        nameInput.value = "";
        emailInput.value = "";
        nameInput.style.borderColor = ""
        emailInput.style.borderColor = ""

    }
    
})

const validateName = () => {
        if (nameInput.value.trim() === "") {
            nameError.innerHTML = `Enter Something`
            nameInput.style.borderColor = "red"
            return false
        } else if (nameInput.value.trim().length < 20) {
            nameError.innerHTML = `Not Long enough`
            nameInput.style.borderColor = "red"
            return false
        }
        else {
        nameError.innerHTML = "";
            nameInput.style.borderColor = "green"
            return true
    }
    }
const validateEmail = () => {
    let emailRegex = /^\S+@\S+\.\S+$/
    if (emailInput.value.trim() === "") {
        emailError.innerHTML = `Enter something mate`
        emailInput.style.borderColor = "red"
        return false
    } else if (!emailRegex.test(emailInput.value)) {
        emailError.innerHTML = `Not a valid address mate, come on now`
        emailInput.style.borderColor = "red"
        return false
    } else {
        emailError.innerHTML = "";
        emailInput.style.borderColor = "green"
        return true
    }
}

nameInput.addEventListener('input', validateName)
emailInput.addEventListener('input',validateEmail)    