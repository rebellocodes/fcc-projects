const sumPrimes = number => {
    let sum = 0
    if (number < 2) {
        return 0;
    } else {
        let array = [];
        for (let i = 2; i <= number; i++) {
            array.push(i)
        }
        let primeArray = array.filter(num => {
            let isPrime = true;
            for (let i = 2; i < num; i++) {
                if (num % i !== 0) {
                    continue;
                } else {
                    isPrime = false
                }
            }
            return isPrime
        })
        for (let i = 0; i < primeArray.length; i++){
            sum += primeArray[i];
        }
        return sum;

        
    }
    
}

