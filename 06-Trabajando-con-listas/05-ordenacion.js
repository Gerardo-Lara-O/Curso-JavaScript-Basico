const array = [2,5,9,23,33,78,34]
console.log(array);

array.sort((a,b) => {
    if(a<b){
        return -1
    }else{
        return +1
    }
})

console.log(array);


const arrayNumericos = [444,23,6,3,22,6,45,3,75]
arrayNumericos.sort((a,b) => a - b)
console.log(arrayNumericos);

// array de objetos
const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Amania", edad: 29}
]
 
listaObjetos.sort((a,b) =>{
    if(a.edad < b.edad){
        return -1
    }else if(a.edad > b.edad){
        return +1
    }else{
        return 0
    }
})

console.log(listaObjetos);