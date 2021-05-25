/**
 * Condicionales
 * Ejemplo 3.3 pág. 53
 */
/** 
let unidades=0;

unidades=+prompt("¿Cuántos productos desea comprar");

if(unidades>=1000){
    console.log(`Precio por producto 0.85 centavos`);
    console.log(`Total a pagar: ${unidades*0.85}`);
}else{
    console.log(`Precio por producto 0.90 centavos`);
    console.log(`Total a pagar: ${unidades*0.90}`);
}
*/

// let unidades=0;
// let total=0;
// unidades=+prompt("Cuántos productos desea comprar?");

// if(unidades>=1000){
//     console.log(`Precio por producto 0.85 centavos`);
//     total=unidades*0.85;
// }else{
//     console.log(`Precio por producto 0.90 centavos`);
//     total=unidades*0.90;
// }

// console.log(`Total a pagar: ${total}`);
// document.write(`Total a pagar: ${total}`);

// let precio=0;
// let pago=0;
// let descuento=0;
// precio=+prompt("Precio del traje");

// if(precio>2500){
//     console.log(`Aplica descuento del 15%`);
//     descuento=0.15*precio;
// }else{
//     console.log(`Aplica descuento del 8%`);
//     descuento=0.08*precio;
// }
// pago=precio-descuento;
// console.log(`Total descuento: ${descuento}`);
// console.log(`Total a pagar: ${pago}`);

/***************************************** */

/********EJercicio 3.5 pag. 58
 * Obtener el mayor de 3 números
 */

// let n1 = 32;
// let n2 = 5;
// let n3 = 100;
// let mayor = 0;

// if (n1 > n2) {
//   if (n1 > n3) {
//     mayor = n1;
//   } else {
//     mayor = n3;
//   }

//   if (n2 > n3) {
//     mayor = n2;
//   } else {
//     mayor = n3;
//   }
// }
// document.write(`El número mayor es: ${mayor}`);

/********
 * Ejercicio 3.5 pág. 8 versión con Operadores lógicos
 */

// let n1=90, n2=33, n3=42, mayor=0;
// if(n1>n2 && n1>n3){
//     mayor=n1;
// }else{
//     if(n2>n1 && n2>n3){
//         mayor=n2;
//     }else{
//         mayor=n3;
//     }
// }
// document.write(`El mayor de: ${n1} ${n2} ${n3} es: ${mayor} `);

/********
 * Ejercicio: Dado el precio de un producto,
 * aplicar el 15% de dcto en caso sea día "Lunes" o "martes"
 */

// let precio=1000.00;
// //let dia=promt("Ingrese el día"); //new Date
// let dia = "miercoles";

// if (dia==="lunes" || dia=="martes"){
//     precio=precio*0.85;
// }

// document.write(`Total a pagar: ${precio}`);

// let platos=250;
// let total=0;

// if(platos<200){
//     total=platos*95;
// }else{
//     if(platos<=300){
//         total=platos*85;
//     }else{
//         total=platos*75;
//     }
// }
// //document.write(`Total a pagar: ${total}`);
// document.write(`Cantidad de plato: ${platos}<br> Total a pagar:${total}`);

// let horas = 8;
// let pago = 0;
// if (horas <= 2) {
//   pago = horas * t1;
// } else {
//   if (horas <= 5) {
//     pago = 2 * 5 + (horas - 2) * 4;
//   } else {
//     if (horas <= 10) {
//       pago = 2 * 5 + 3 * 4 + (horas - 5) * 3;
//     } else {
//       pago = 2 * 5 + 3 * 4 + 5 * 3 + (horas - 10) * 2;
//     }
//   }
// }

// document.write(
//   `Horas en el estacionamiento: ${horas}<br> Total a pagar:${pago}`
// );


let bono=0, antig=2,sueldo=3000;
if(antig>4||sueldo<2000){
    bono=0.25*sueldo;
}
else{
    bono=0.20*sueldo;
}

document.write(`Bono asignado: ${bono}`);