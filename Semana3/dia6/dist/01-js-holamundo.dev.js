"use strict";

console.log("Hola mundo"); //VARIABLES

/**
 * 1. Una variable se crea sólo una vez.
 */

var nombre = "Juan Manuel";
var apellido = "Torres Castro";
console.log("Nombre: " + nombre); //tipo de dato numerico (number)

var edad = 29;
var sueldo = 950.20;
sueldo = 980;
sueldo = sueldo + 20;
console.log("Sueldo: " + sueldo); //Tipo de dato boolean (verdadero o falso)

var soltero = true;
var papeletas = false;
console.log("Soltero?:" + soltero); //tipo de dato array

var meses = ["January", "February", "March", "April"];
console.log(meses); //imprimir alguna posición de los arreglos

console.log(meses[2]);
/**
 Operaciones matemáticas son iguales que en Excel por ejemplo +,-,*,/
 % => (módulo) es una operacion que retorna 
 el residuo de una división entera
 */

var modulo = 55 % 6;
console.log("55 % 6 = " + modulo); //operaciones simplificadas

var likes = 2; //incrementar automáticamente en una unidad a la variable likes

likes++;
console.log(likes); //incrementar automáticamente en una unidad a la variable likes

likes = likes + 1;
console.log(likes); //incrementar automáticamente en una unidad a la variable likes

likes += 1;
console.log(likes);