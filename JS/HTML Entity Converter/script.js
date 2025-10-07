const convertHTML = string => {
    let finalString = string;
    const pairings = {
        "&":"&amp;",
        "<":"&lt;",
        ">":"&gt;",
        "\"":"&quot;",
        "'":"&apos;"
    }
    for(const property in pairings){
            finalString = finalString.replaceAll([property],pairings[property]);
            
    }
return finalString
}