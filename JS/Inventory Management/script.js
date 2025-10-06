const inventory = [
    {
        name: "lg",
        quantity: 5
    },
    {
        name: "panasonic",
        quantity: 5
    }
];

const findProductIndex = productName => {
    for (let i=0;i<inventory.length;i++){
        if(inventory[i].name === productName.toLowerCase()){
            return i;
        }
    }
    return -1;  
}

const addProduct = productObject => {
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].name === productObject.name.toLowerCase()){
            inventory[i].quantity += productObject.quantity;
            console.log(`${productObject.name.toLowerCase()} quantity updated`)
            return `${productObject.name.toLowerCase()} quantity updated`
        }
    }
    inventory.push(productObject);
    inventory[inventory.length-1].name = productObject.name.toLowerCase();
    console.log(`${productObject.name.toLowerCase()} added to inventory`)
    return `${productObject.name.toLowerCase()} added to inventory`
}

const removeProduct = (productName,productQuantity) => {
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].name === productName.toLowerCase()){
            if(inventory[i].quantity > productQuantity){
                inventory[i].quantity -= productQuantity;
                console.log(`Remaining ${productName.toLowerCase()} pieces: ${inventory[i].quantity}`);
                return `Remaining ${productName.toLowerCase()} pieces: ${inventory[i].quantity}`;
            }
            if(inventory[i].quantity === productQuantity){
                return inventory.splice(i,1);
            }
            if(inventory[i].quantity < productQuantity){
                console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[i].quantity}`)
                return `Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[i].quantity}`
            }
            
        }
    }
    console.log(`${productName.toLowerCase()} not found`)
    return `${productName.toLowerCase()} not found`
    
    
}