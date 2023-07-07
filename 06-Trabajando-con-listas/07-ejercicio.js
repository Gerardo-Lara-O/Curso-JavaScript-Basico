// Lista de la compra
let listaCompra = ["Manzanas", "Leche", "Pan", "Huevos", "Arroz"];

// Añadir "Aceite de Girasol" a la lista de la compra
listaCompra.push("Aceite de Girasol");

// Eliminar "Aceite de Girasol" de la lista de la compra
listaCompra = listaCompra.filter(item => item !== "Aceite de Girasol");

// Lista de películas favoritas
let peliculasFavoritas = [
  { titulo: "Pelicula 1", director: "Director 1", fecha: "01/01/2010" },
  { titulo: "Pelicula 2", director: "Director 2", fecha: "15/06/2012" },
  { titulo: "Pelicula 3", director: "Director 3", fecha: "25/09/2015" }
];

// Filtrar películas posteriores al 1 de enero de 2010
let peliculasPosteriores2010 = peliculasFavoritas.filter(pelicula => {
  const fecha = new Date(pelicula.fecha);
  return fecha > new Date("01/01/2010");
});

// Obtener lista de directores
let directores = peliculasFavoritas.map(pelicula => pelicula.director);

// Obtener lista de títulos
let titulos = peliculasFavoritas.map(pelicula => pelicula.titulo);

// Concatenar lista de directores y lista de títulos
let listaConcatenada = directores.concat(titulos);

// Concatenar lista de directores y lista de títulos utilizando el spread operator
let listaConcatenadaSpread = [...directores, ...titulos];

console.log("Lista de la compra:", listaCompra);
console.log("Películas posteriores a 2010:", peliculasPosteriores2010);
console.log("Lista de directores:", directores);
console.log("Lista de títulos:", titulos);
console.log("Lista concatenada:", listaConcatenada);
console.log("Lista concatenada (spread operator):", listaConcatenadaSpread);