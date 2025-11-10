const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email")
const orderInput = document.getElementById("order-no")
const productCodeInput = document.getElementById("product-code")
const quantityInput = document.getElementById("quantity")
const complaintCheckbox = Array.from(document.querySelectorAll('input[type="checkbox"]'));
const complaintReasonInput = document.getElementById("complaint-description")
const solutionRadioInput = Array.from(document.querySelectorAll('input[type="radio"]'))
const solutionReasonInput = document.getElementById("solution-description")
const form = document.getElementById("form")

const validateForm = () => {
    // Defines regex patterns once
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/i;
    const orderRegex = /^2024\d{6}$/;
    const productRegex = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/;
    const descriptionRegex = /.{20,}/s; // For min 20 chars, including newlines

    // Helper to check if any option in a group is checked
    const isGroupChecked = (options) => Array.from(options).some(opt => opt.checked);

    // Get value from 'Other' option if it exists
    const isOtherChecked = (options) => Array.from(options).find(opt => opt.value === "Other" && opt.checked);

    let finalObject = {};

    // --- Simple Field Validation ---
    finalObject["full-name"]  = fullNameInput.value.trim() !== "";
    finalObject.email        = emailRegex.test(emailInput.value.trim());
    finalObject["order-no"]   = orderRegex.test(orderInput.value.trim());
    finalObject["product-code"] = productRegex.test(productCodeInput.value.trim());
    finalObject.quantity     = Number(quantityInput.value.trim()) > 0;
    
    // --- Group Validation ---
    finalObject["complaints-group"] = isGroupChecked(complaintCheckbox);
    finalObject["solutions-group"]  = isGroupChecked(solutionRadioInput);
    
    // --- Conditional Description Validation ---
    
    // Complaint Description
    const otherComplaintChecked = isOtherChecked(complaintCheckbox);
    if (otherComplaintChecked) {
        finalObject["complaint-description"] = descriptionRegex.test(complaintReasonInput.value.trim());
    } else {
        finalObject["complaint-description"] = true; // Success by default
    }

    // Solution Description
    const otherSolutionChecked = isOtherChecked(solutionRadioInput);
    if (otherSolutionChecked) {
        finalObject["solution-description"] = descriptionRegex.test(solutionReasonInput.value.trim());
    } else {
        finalObject["solution-description"] = true; // Success by default
    }

    return finalObject;
};

const isValid = (validationObject) => {
    // Uses Object.values() and .every() for a single, concise line
    return Object.values(validationObject).every(result => result === true);
};

const getParentFieldset = (element) => element.closest('fieldset');

const applyStyle = (element, isValid) => {
    element.style.borderColor = isValid ? 'green' : 'red';
};

// Map to connect validation keys to DOM elements
const elementMap = {

    "full-name": fullNameInput,
    email: emailInput,
    "order-no": orderInput,
    "product-code": productCodeInput,
    quantity: quantityInput,
    "complaints-group": getParentFieldset(complaintCheckbox[0]),
    "complaint-description": complaintReasonInput,
    "solutions-group": getParentFieldset(solutionRadioInput[0]),
    "solution-description": solutionReasonInput

};

// Function to handle form submission
const handleSubmit = (event) => {
    event.preventDefault(); 

    const validationResult = validateForm();
    const formIsValid = isValid(validationResult);

    // Apply styling to ALL fields based on the final result
    for (const key in validationResult) {
        const element = elementMap[key];
        if (element) {
            applyStyle(element, validationResult[key]);
        }
    }

    if (formIsValid) {
        alert("Form submitted successfully!");
        // form.submit();
    } else {
        alert("Please correct the highlighted errors before submitting.");
    }
};
// Attach the listener: form.addEventListener('submit', handleSubmit);
form.addEventListener('submit', handleSubmit);