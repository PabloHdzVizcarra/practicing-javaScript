"use strict";

// Excersise I

let line = "";
for (let i = 0; i < 7; i++) {
  line += "#";
  console.log(line);
}

// FizzBuzz

// for (let i = 1; i <= 100; i++){

//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('FizzBuzz');
//     }
//     else if(i % 3 == 0) {
//         console.log('Fizz');
//     }
//     else if (i % 5 == 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

// Excersise II

function chess(num) {
  let signal = "";
  for (let i = 0; i < num; i++) {
    for (let x = 0; x < num; x++) {
      if ((x + i) % 2 == 0) {
        signal += " ";
      } else {
        signal += "#";
      }
    }
    signal += "\n";
  }

  return signal;
}
console.log(chess(10));



function happyBirthdayJanuary() {
  let lucero = 12,
    mom = 31,
    daysMoth = 31;

  for (let i = 1; i <= daysMoth; i++) {
    if (i === lucero) {
      console.log(`!!!El dia ${lucero} tu esposa Lucero cumple años`);
    } else if (i === mom) {
      console.log(`!!!El dia ${mom} tu mama cumple años`);
    } else {
      console.log(`${i} de Enero nadie cumple años`);
    }
  }

  return "Termino de programa";
}
// console.log(happyBirthdayJanuary());


//