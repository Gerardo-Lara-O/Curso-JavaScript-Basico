// Metodos mas utilizados con cadenas de caracteres
// como obtener la longiitud de un string

let str = "Hola soy un string"
console.log(str.length);


// Obtener partes d cadenas de caracteres
// slice() substring() substr()
let slice_str = str.slice(0,10);
console.log(slice_str);

let substring_str = str.substring(0,10)
console.log(substring_str);

let substr_str = str.substr(0,10);
console.log(substr_str);

let cadena = "Hola mi nombre es Gerardo";
console.log(cadena.replace("Gerardo", "Ivan"));


let texto_largo = "react es simplemente increible. Gracias por tus cursos que explicas demasiado bien y realmente empizas desde lo basico hasta lo que se usa en entornos de trabajos profesionales y personales.Esperare a una renovacion del curso master de JS... Gracias por tu contenido."

// expresiones regulares
console.log(texto_largo.replace(/los/g, 'cinco'));