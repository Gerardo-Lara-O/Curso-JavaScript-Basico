const array = [4,6,7,8,3,6,2,1,-5,-6,12]

// const resultado = array.every(valor => {
//     if(typeof valor === "number"){
//         return true
//     }else{
//         return false
//     }
// })

const resultado = array.every(valor => valor > 0)

console.log(resultado);

// compracion de lista
const ar1 = [1,2,3,4]
const ar2 = [1,2,3,4]

const comparaArrays = (array1, array2) => {
    if (array1.length !== array2.length) return false
    const res = array1.every((valor, i) => valor === array2[i])
    return res
}

console.log(comparaArrays(ar1,ar2));