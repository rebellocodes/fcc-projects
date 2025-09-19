const confirmEnding = (str,part) => {
    let targetIndex = part.length;
    console.log(targetIndex);
    if(str.substring(str.length - targetIndex) === part){
        return true;
    } else {
        return false;
    }
}