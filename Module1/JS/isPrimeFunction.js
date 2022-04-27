

function isPrime(numberToCheck){
    if (numberToCheck <= 1) {
        console.log('Not Prime');
    } else {
       for (let i = 2; i < numberToCheck; i++){
           if (numberToCheck % i === 0){
               console.log('Not Prime');
               break
           }
       } 
    }
    console.log('Prime number');
}

console.log(isPrime(4))