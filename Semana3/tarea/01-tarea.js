/**
 * 1. Algoritmo para sumar calcular
 * el área de un triángulo
 */

 let b=0,
 h=0,
 area=0;

//como leer los números ingresados por el usuario
c1=+prompt("Ingrese la primera nota")
c2=+prompt("Ingrese la segunda nota")
c3=+prompt("Ingrese la tercera nota")
c4=+prompt("Ingrese la cuarta nota")
console.log(typeof c1);
console.log(c1);

suma=c1+c2+c3+c4;
promedio=suma/4;

/**
* El uso de los backticks () nos ayudan a concatenar 
* variables con strings en una sola línea sin el uso del operador (+)
* 
*  */

console.log(promedio);
console.log("El promedio es :"+promedio);
console.log(`El promedio es : ${promedio}`);