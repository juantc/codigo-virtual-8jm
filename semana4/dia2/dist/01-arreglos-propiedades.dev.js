"use strict";

/**
 * ¿Cómo insertar un elemento en un arreglo?
 * arreglo.push(elemento_a_insertar)
 * Insertando un elemento en la posición final de un arreglo
 */
var marcasDeAutos = [];
marcasDeAutos.push("Hyundai");
marcasDeAutos.push("Kia");
marcasDeAutos.push("Audi"); //Ejercicio: Hacer que el usuario pueda ingresar 5 marcas adicionales

for (var i = 0; i < 5; i++) {
  var _marca = prompt("Ingrese una nueva marca"); //inyectando la nueva marca en el arreglo


  marcasDeAutos.push(_marca);
}

var marca = "Mercedes Benz";
console.log(marcasDeAutos); //console.log(i);

console.log(marca);