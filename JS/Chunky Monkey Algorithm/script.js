
const chunkArrayInGroups = (array,number)=> {
    let groupArray = [];
    for(let i=0;i<array.length; i+=number){
        groupArray = [array.slice(i,i + number)];
    }
        return groupArray;
} 