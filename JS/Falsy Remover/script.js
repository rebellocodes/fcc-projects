const bouncer = array => {
    let truthyArray = [];
    for(const arr of array){
        if(Boolean(arr) === true){
            truthyArray.push(arr);
        } 
    }
    return truthyArray;
}