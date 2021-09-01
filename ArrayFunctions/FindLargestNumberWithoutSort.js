//Program To find Second Largest And Second Minimum Number From Array

const prompt = require('prompt-sync')();
let numberArray = [];
for (index = 1; index < 10; index++) {
    let num = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
    numberArray.push(num);
}
console.log("Array is " + numberArray); // Store into an arrar
let firstMax = numberArray[0];  //Find The 2nd largest and 2nd smallest
let secondMax = numberArray[0];
let firstMin = numberArray[0];
let secondMin = numberArray[0];
for (let number of numberArray) {
    if (number > firstMax) {
        secondMax = firstMax;
        firstMax = number;
    }
    else if (number > secondMax) {
        secondMax = number;
    }
    if (number < firstMin) {
        secondMin = firstMin;
        firstMin = number;
    }
    else if (number < secondMin) {
        secondMin = number;
    }
}
console.log("Second Maximum : " + secondMax + "  Second Minimum : " + secondMin);