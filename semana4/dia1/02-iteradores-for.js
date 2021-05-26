/********
 * Ciclo for
 */

// for(let i=0; i<10; i++){
//     console.log(`Valor de i: ${i}`);
// }
// let promedio=0;
// let suma=0;
// for(let i=0; i<4; i++){

//     suma=suma+ +prompt(`Ingresar nota: ${i+1}`);
// }
// promedio=suma/i;
// console.log(`El promedio es: ${promedio}`);

/**
 * Ejercicio: dados dos números
 * a y b
 * Calcular la multiplicación de ambos sin hacer uso
 * del símbolo * (asterisco), sólo se pueden usar sumas
 * sucesivas
 */

// let a = 0,
//   b = 0,
//   producto = 0;
// a = +prompt("Ingrese primer factor");
// b = +prompt("Ingrese segundo factor");

// for (let i = 0; i < b; i++) {
//   producto += a;
// }
// console.log(`El producto: ${a}x${b} es ${producto}`);



/**
 * 
 */
// let x = 0, n=0;
// x=+prompt("Ingrese número");

// for(n=0;n<=x;n++){
//     console.log(`///// Tabla del ${n} /////`);
//     for (let i = 0; i <13; i++) {
//         console.log(`El producto: ${n}x${i} es ${n*i}`);
//     }
//     console.log(`xxxxxxxxxxxxxxxxxx`);
// }



/********
 * RECORRIENDO ARREGLOS
 */

let edades=[35,45,68,80,74,20,15,95,65,45];
console.log(edades);
/********
 * arreglo.length=>Devuelve la cantidad de elementos de un arreglo.
 * 
 */
console.log(`Elementos del arreglo: ${edades.length}`);
console.log(`Primer elemento de un arreglo: ${edades[0]}`);
console.log(`Último elemento de un arreglo: ${edades[edades.length-1]}`);


for(let i=0; i<edades.length;i++){
    console.log(edades[i])
}


for(let i=0; i<edades.length;i++){

    //Por ejemplo, sólo se pueden vacunar las personas que tengan
    //una edad mayor o igual a 60 añitos
    //
    if(edades[i]>=60){
        console.log(`Apto con edad de: ${edades[i]} años`);
    }
}