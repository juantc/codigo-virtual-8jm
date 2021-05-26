/******
 * SENTENCIA BREAK VS CONTINUE
 */


let numeros=[3,545,3,-5,34,90,2,90,0];

/**
 * Ejercicio: imprimir los números hasta encontrar un número
 * negativo
 */

// for(let i=0; i< numeros.length; i++){
//     if(numeros[i]>=0){
//         console.log(numeros[i]);
//     }else{
//         break;
//     }
// }

/**
 * Ejercicio: Si un número es impar imprimirlo, y en caso
 * contrario saltar a la siguiente iteración
 */

for(let i=0; i<numeros.length; i++){
    if(numeros[i]%2===0){
        continue;
    }
    console.log(numeros[i]);
}
