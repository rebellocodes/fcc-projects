const questions = [
    {
        category: "Geography",
        question: "Which continent is India Located in?",
        choices:["Asia","Europe","North America"],
        answer: "Asia"
    },
    {
        category: "Health",
        question: "What is the full form of BMI?",
        choices:["Black Men India","Body Mass Index","Body Mass Integer"],
        answer: "Body Mass Index"
    },
    {
        category: "Sports",
        question: "What is CR7?",
        choices:["Cantwell Rudy","Chip Rodriogues","Cristiano Ronaldo"],
        answer: "Cristiano Ronaldo"
    },
    {
        category: "Food",
        question: "Which fast food place has the golden arches?",
        choices:["Subway","Dominos","McDonalds"],
        answer: "McDonalds"
    },
    {
        category: "Cars",
        question: "Which is a German Car company?",
        choices:["Mercedes","Nissan","Mcclaren"],
        answer: "Mercedes"
    }
];

const getRandomQuestion = questions => {
    let arrayLength = questions.length;
    let randomNumber = Math.floor(Math.random() * arrayLength) + 1;
    return questions[randomNumber];
}
const getRandomComputerChoice = choice => {
    let arrayLength = choice.length;
    let randomNumber = Math.floor(Math.random() * arrayLength);
    return choice[randomNumber];
}
const getResults = (question,choice) => {
    if(question.answer === choice){
        return "The computer's choice is correct!"
    } else {
        return "The computer's choice is wrong. The correct answer is: " + question.answer;
    }
}
