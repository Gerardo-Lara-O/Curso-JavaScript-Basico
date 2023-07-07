const array = ["hola", 2, 5, 90, false, undefined]

// Forma ES6
// for each

array.forEach(valor => {
    console.log(valor);
})



let suma = 0
const arrayNum = [3,6,2,77,2,3,90,19]
arrayNum.forEach(valor => {
    suma += valor;
    console.log(valor);
})
console.log(suma);

const variable = array.find(valor => {
    if (valor === 90) {
        return true
    }
})
console.log(variable);


const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Amania", edad: 29}
]

const objeto = listaObjetos.find(o => {
    return o.nombre === "Miguel"
})

console.log(objeto.edad);


const {edad} = listaObjetos.find(o => o.nombre === "Miguel")
console.log(edad);


