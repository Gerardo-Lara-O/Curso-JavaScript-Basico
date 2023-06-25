const listaNumeros = [1,2,3,4,5];

const lista = [1,"Hola",1.5,true,undefined];

console.log(lista);

// 2da forma
const lista2 = new Array(1,2,3,4,5);
console.log(lista2);

const lista3 = new Array(3);
lista3[0] = 1;

console.log(lista3);

// lista con varias listas
const listas = [listaNumeros,lista2]
console.log(listas);

// *Objeto

const movil = {
    altura: 10,
    anchura: 10,
    color: "rojo",
    marca: "xiami",
    contactos: ["Gorka", "Martin", "Raul"],
    tarjeta: {
        marca: "sandisk",
        almacenamiento: 32
    }
}

console.log(movil.contactos);