const pyramid = (char,rows,boolean) => {
    let stringPattern = "\n" ;
    if(boolean === false){
        for(let i=1;i<=rows;i++){
            stringPattern = stringPattern +  " ".repeat(rows-i) + char.repeat(i*2-1) + "\n";  
            console.log(stringPattern)
    }     
    } else if (boolean === true){
        for(let i=rows;i>0;i--){
            stringPattern = stringPattern+  " ".repeat(rows-i) + char.repeat(i*2-1) + "\n";  
            console.log(stringPattern)
    }
}
    return stringPattern;
}