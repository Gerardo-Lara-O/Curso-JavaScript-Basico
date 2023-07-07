let lista1 = [1,2,3,4,5,6]
let lista2 = [7,8,9]

console.log(lista1.concat(lista2));console.log();

let lista3 = lista1.concat(lista2)
console.log(...lista3);

let lista4 = [...lista1, ...lista2]
console.log(lista4);


const array = ["hola",1,2,3,true,null,"adios"]
const array2 = array.slice(1,4)
console.log(array2);