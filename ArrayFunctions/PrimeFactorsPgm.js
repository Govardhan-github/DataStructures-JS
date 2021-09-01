//Prime Factorization Program to printPrime Factors of a number n into an array 

const prompt = require('prompt-sync')();
    function isPrime(number) {
        if (number >= 2) {
            let flag = 0;
            for (let i = 2; i <= number / 2; i++) {
                if (number % i == 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0)
                return true;
        }
        return false;
    }
    let input = Number(prompt("Enter a number : "));
    let primeFactors = [];
    for (let i = 2; i <= input; i++) {
        if (input % i == 0 && isPrime(i))
            primeFactors.push(i);
    }
    console.log("Prime factors Are : " + primeFactors);