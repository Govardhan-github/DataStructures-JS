//Program To Print The Repeated Numbers From Range 1-100

let Array =[];
for (i=1; i<100; i++ ){
        if (i%11 == 0 ){
            Array.push(i);
        }
    }
console.log(Array);