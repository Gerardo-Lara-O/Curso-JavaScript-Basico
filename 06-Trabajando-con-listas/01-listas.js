// primera forma
let array = new Array()

// segunda forma
let array2 = [1,"Hola", true, {id:5}]

// acceder a los valores de  un array a traves de su posicion
console.log(array2[1]);


// Metodos para introducir nuevos valores en nuestos arrays
array2.push("final")
console.log(array2);


array2.unshift("inicio")
console.log(array2);

let array3 = [1,2,3,4,5,6]
// Eliminar valores splice(indice, numDeValoresAEliminar)
array3.splice(1,1)
console.log(array3);

// Anadir valores .splice(indice,0,valores)
array3.splice(1,0,"hola")
console.log(array3);

// modificar valores .splice(indice,1,valores)
array3.splice(1,1,2)
console.log(array3);