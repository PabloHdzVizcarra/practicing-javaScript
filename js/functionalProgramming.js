'use strict'

//Funciones de primero clase EJEMPLOS:

let hola = function () {
    return 'Hola Mundo';
}
console.log(hola());

let num =
    10 +
    (function () {
        return 15;
    })();
console.log(num);

function sumFunc(a, b) {
    return a + b()
}
console.log(sumFunc(10, function () {
    return 10
}));

//_______Funciones de Orden Superior___________________________________
let suma = function(a) {
    return function(b) {
        return a + b;
    };
};

let resultSum = suma(10);
console.log(resultSum(2));

//_________________________________________
let sumaDos = function(x) {
    return function(y) {
        return x + y;
    }
};

console.log(sumaDos(2)(5));

//__________Map, Reduce y Filter_______________________________________

let distros = [
    {name: 'Ubuntu', score: 8},
    {name: 'Kubuntu', score: 9},
    {name: 'Xubuntu', score: 9},
    {name: 'Linux Mint', score: 6}
];

//____________FILTER
console.log(distros.filter(function(distro) {
    return distro.score >= 8;
}))

//____________MAP
console.log(distros.map(function(obj) {
    return obj.name;
}))

//____________REDUCE
console.log(distros.reduce(function(sum, distro) {
    return sum + distro.score;
}, 0));

let weekMoney = [10, 15, 50, 0, 100, 100, 0];
console.log(weekMoney.reduce(function(sum, weekMoney) {
    return sum + weekMoney;
}, 0));

//_______________ENCADENANDO METODOS

console.log(distros
    .filter(function(distro) {
        return distro.score >= 8;
    })
    .map(function(obj){
        return obj.name;
    }));