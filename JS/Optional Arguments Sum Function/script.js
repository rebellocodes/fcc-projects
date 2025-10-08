const addTogether = (...args) => {
    if(args.length === 2){
        const[a,b] = args;
        if(typeof a === "number" && typeof b === "number"){
            return a +b;

        } else {
            return undefined;
        }
    } 
    if(args.length === 1){
        const a = args[0];
        if(typeof a !== "number"){
            return undefined

        }
        return function(b){
            if(typeof a === "number" && typeof b === "number"){
                return a + b;
            }
            else{
                return undefined;
            }
        }
    }
    return undefined
}