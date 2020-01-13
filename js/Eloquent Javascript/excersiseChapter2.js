'use strict'



let line = '';
for (let i = 0; i < 7; i++) {
    line += '#'
    console.log(line);
}

// FizzBuzz

for (let i = 1; i <= 100; i++){

    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    }
    else if(i % 3 == 0) {
        console.log('Fizz');  
    }
    else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

let date = 8;
for (let i = 0; i < date; i++) {
    
}