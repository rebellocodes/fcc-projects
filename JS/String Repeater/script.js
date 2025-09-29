const repeatStringNumTimes = (str,num) => {
    let string =str;
    if(num<=0){
        return ""
    } else {
        for(let i=1; i<num;i++){
        string += str;
        }
    }
    return string;
}