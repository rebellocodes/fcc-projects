let groupArray = [];
const chunkArrayInGroups = (array,number)=> {
    for(let i=0;i<array.length; i+=number){
        groupArray = [array.slice(i,i + number)];
    }
        return groupArray;
} 