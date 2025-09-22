const lunches = [];
const addLunchToEnd = (lunches,string) => {
    lunches.push(string);
    console.log(string + " added to the end of the lunch menu.");
    return lunches;
}
const addLunchToStart = (lunches,string) => {
    lunches.unshift(string);
    console.log(string + " added to the start of the lunch menu.");
    return lunches;
}
const removeLastLunch = lunches => {
    if(lunches.length === 0){
        console.log("No lunches to remove.")
    }else {console.log(lunches.pop() + " removed from the end of the lunch menu.");
    return lunches;
    }
}
const removeFirstLunch = lunches => {
    if(lunches.length === 0){
        console.log("No lunches to remove.")
    }else {console.log(lunches.shift() + " removed from the start of the lunch menu.");
    return lunches;
    }
}
const getRandomLunch = lunches => {
    if(lunches.length === 0){
        console.log("No lunches available.")
    } else {
        const randomIndex = Math.floor(Math.random() * lunches.length)
        console.log("Randomly selected lunch: " + lunches[randomIndex]);
    }
}
const showLunchMenu = lunches => {
    if (lunches.length === 0){
        return console.log("The menu is empty.")
    } else{
        return console.log("Menu items: " + lunches.join(", "))
    }
}