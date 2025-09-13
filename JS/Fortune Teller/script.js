let fortune1 = "You will become a millionaire";
let fortune2 = "You will own a Lamborghini";
let fortune3 = "You will go back to India";
let fortune4 = "You will get a promotion";
let fortune5 = "You will win an award";


let randomNumber = Math.round(Math.random() * (5-1) + 1);
console.log(randomNumber);

let selectedFortune;


if(randomNumber === 1){
    selectedFortune = fortune1;
} else if(randomNumber === 2){
    selectedFortune = fortune2;
} else if(randomNumber === 3){
    selectedFortune = fortune3;
} else if(randomNumber === 4){
    selectedFortune = fortune4;
} else {
    selectedFortune = fortune5;
}

console.log(selectedFortune);