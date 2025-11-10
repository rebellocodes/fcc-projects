const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

const formatDateMMDDYYYY = date => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `Formatted Date (MM/DD/YYYY): ${month+1}/${day}/${year}`
}
const formatDateLong = date => {
    const options = {
        year: "numeric",
        month: "long",
        day:"numeric"
    }
    const formattedDate = date.toLocaleDateString("en-US", options)
    return `Formatted Date (Month Day, Year): ${formattedDate}`
}