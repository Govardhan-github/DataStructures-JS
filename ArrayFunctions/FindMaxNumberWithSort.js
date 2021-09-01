
 const prompt = require('prompt-sync')();
 let numArray = new Array();
 for (i = 1; i < 10; i++) {
     let num = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
     numArray.push(num);
 }
 console.log("Array is " + numArray);
 console.log("Array With Sorting : " + numArray.sort());
 let secondMinimum = numArray.sort()[1];
 let secondMaximum = numArray.sort()[7];
 console.log("Second Maximum : " + secondMaximum + "  Second Minimum : " + secondMinimum);