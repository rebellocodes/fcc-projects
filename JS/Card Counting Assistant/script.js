let count = 0;

const cc = card => {
    if(card >=2 && card<=6){
        count++;
    } else if(card === 10 || card === "J" || card ==="Q" || card === "K" || card === "A"){
        count--;
    }
    if(count>0){
        return count + " Bet";
    } 
    else if(count<=0) {
        return count + " Hold";

    }
}

