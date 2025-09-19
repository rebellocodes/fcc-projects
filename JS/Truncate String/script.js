const truncateString = (str,num) => {
    if(str.length > num){
        return str.substring(0,num) + "...";
    } else if(str.length<= num){
        return str;

    }
}