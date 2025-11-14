const poll = new Map();
console.log(poll)


const addOption = option => {
    if (!option) {
        return `Option cannot be empty.`
    }
    else if (!poll.has(option)) {
        poll.set(option, new Set())
        return `Option "${option}" added to the poll.`
    } else if (poll.has(option)) {
        return `Option "${option}" already exists.`
    }
}
addOption("USA");
addOption("India");
addOption("Germany")

const vote = (option, voterId) => {
    if (!poll.has(option)) {
        return `Option "${option}" does not exist.`
    } else if (poll.has(option)) {
        if (poll.get(option).has(voterId)) {
            return `Voter ${voterId} has already voted for "${option}".`
        } else {
            poll.get(option).add(voterId);
            return `Voter ${voterId} voted for "${option}".`
        }
    }
}

vote("USA", "traveller1");
vote("India", "trvaller2")
vote("Germany", "trvaller3")

const displayResults = () => {
    let result = "Poll Results:"
    let keys = poll.keys();
    for (const key of keys) {
        result += `\n${key}: ${poll.get(key).size} votes`
    }
    return result
}