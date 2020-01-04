'use strict'

const distroUbuntu = ['Ubuntu', 'Xubuntu', 'Lubuntu', 'Kubuntu'];
const distroArchLinux = ['Arch Linux', 'Manjaro', 'Endeavour Os', 'Black Arch', 'Chakra', 'Manjaro'];
const distroDebian = ['Debian', 'Kali Linux', 'Devuan', 'Parrot Os'];
const distroFedora = ['Fedora', 'Fuduntu', 'ASPLinux', 'Linpus Linux'];
const threeNumbers = [10, 20, 30];

let copiedDistroUbuntu = [...distroUbuntu];
const newDistroUbuntu = [...distroUbuntu, 'Ubuntu Mate', 'Ubuntu Budgie'];
let copiedDistroArchLinux = [...distroArchLinux];

//Con el siguiente codigo se eliminan elementos duplicados del Array.
let uniqueArchLinux = [...new Set(distroArchLinux)];

//Sintaxis vieja para eliminar elementos duplicados.
let oldUniqueArchLinux = distroArchLinux.filter((distro, index, arr) => arr.indexOf(distro) === index);


//Concatenar matrizes nueva sintaxis.
let distroUbuntuAndArchLinux = [...distroUbuntu, ...distroArchLinux];


//Concatenar matrizes forma vieja.
let distroDebianAndFedora = distroDebian.concat(distroFedora);

//Pasar argumentos como matrizes
const mezclaThree = (x, y, z) => x + y + z;
mezclaThree(...threeNumbers);

//Pasar argumentos como matrizes (Old Way)
mezclaThree.apply(null, threeNumbers);

//Cortando una matriz
let cutDistroUbuntu = distroUbuntu.slice(1);

//Convierta argumentos en una matriz
const getArray = (...args) => console.log(args);
getArray('Thiago', 'Yara', 'Andrea');

//Copiar un objeto
let ubuntu = {
    name: 'Ubuntu',
    dekspot: 'Gnome'
};
let copiedUbuntu = {...ubuntu}
console.log(copiedUbuntu);

//Copiar un objeto (Old Way)
let newUbuntu = Object.assign({}, ubuntu);
console.log(newUbuntu);

//Fusionar objetos
let debian = {
    nucleo: 'Unix',
    version: 19.10
}

let mergeUnix = {...ubuntu, ...debian};
console.log(mergeUnix);

//Fusionar objetos (Old Way)
let oldMerge = Object.assign({}, ubuntu, debian);
console.log(oldMerge);

//Dividir cade de caracteres
let thiago = 'Thiago';
console.log([...thiago]);