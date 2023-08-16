// Crear un array de tres elementos en la variable myArray.
let myArray = ["Pizza", "Guitarra", "Playa"];

// Modificar los dos primeros elementos del array.
myArray[0] = "Hamburguesa";
myArray[1] = "Piano";

// Agregar un nuevo elemento al comienzo del array.
myArray.unshift("Montaña");

// Crear una variable de tipo string para leer todos los elementos del array separados por guiones.
let arrayString = myArray.join(" - ");

console.log("myArray:", myArray);
console.log("arrayString:", arrayString);