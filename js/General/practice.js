'use strict'


console.log(100 + 4 * 100);
console.log(0 / 0);
console.log("Esta es la primer linea \ny esta la segunda");
console.log("un caracter de nueva linea");
console.log(typeof 3);
console.log(typeof 'Hola');
console.log(4 > 3);
console.log('Z' > 'a');
console.log(4 < 5 && 8 < 6);
console.log(!true);
console.log(10 < 9 ? 'Verdadero' : 'Falso');
console.log(8 * null);
console.log(5 - '3');
console.log(null == undefined);
console.log(null || 'User');
console.log('Thiago' || 'Yara');
console.log(!false);

function checkNumberLess(num) {
    return 10 != num ? 'Correcto':'Falso'
}
console.log(checkNumberLess(10));


let dias = 1;
let counter = 0;
while (counter < 10) {
    dias *= 4;
    counter++;
    console.log(dias);
}



switch (prompt("Que dia de la semana es hoy?")) {
    case 'lunes':
        console.log('Hoy es Lunes a trabajar');
        break;
    case 'martes':
        console.log('A darle con todo');
        break;
    case 'miercoles':
        console.log('Mitad de semana');
        break;
    case 'jueves':
        console.log('Hermoso dia');
        break;
    case 'viernes':
        console.log('Fin de semana');
        break;
    case 'sabado':
        console.log('A descanzar');
}