let lista = [1,2,3,4,5,6];

for(let i = 0; i < lista.length; i++){
    console.log(lista[i] * 2);
}

//* for of
for(let valor of lista){
    console.log(valor);
}


//* for each
lista.forEach(valor =>{
    console.log(valor);
})

let persona = {
    nombre: "Gorka",
    apeliido: "Villar",
    edad: 34
}


//* for in
for(let propiedad in persona){
    console.log(persona[propiedad]);
}


let customer = {
    name: 'Esacaleras Rodriguez',
    vat: 'ESB333333',
    address: 'C/ Casanova',
    isActive: true,
    concatName: 'Manuel Garcia',
    created_at: 162106
}
for(prop in customer){
    console.log(prop);
    console.log(customer[prop]);
}
//* Ejemplo: sacar el numero de globos de cada tipo 
let ballom ={
    red: 20,
    green: 12,
    blue: 8,
    yellow: 1,
    white: 5
}

let ballomQuantity = 0;
for(color in ballom){
    console.log(color);
    ballomQuantity += ballom[color];
}

console.log(ballomQuantity);