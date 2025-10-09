const getIndexToIns = (array,number) => {
    array.sort((a,b) => a-b);
    return array.findIndex(element => element >= number)
}