/**
 * A continuación una serie de propiedades de la clases
 */
let frase='Los programadores crean lo que las personas sueñan';
/**
 * cadena.length=> retorna la cantidad de caracteres 
 * que tiene un string
 */

console.log(`Cantidad de caracteres: ${frase.length}`);
//objeto.metodo()


console.log(`${frase.toUpperCase()}`);
console.log(`${frase.toLowerCase()}`);

let resultadoSplit=frase.split(' ');
console.log(resultadoSplit)


/*****
 * cadena.indexOf("termino_a_buscar")
 * Retorna la posición en la que inicia el término buscado dentro
 * de la cadena de texto
 */


/*****
 * Obteniendo la posición de la palabra crean
 */

console.log(frase.indexOf('crean'));
console.log(frase.indexOf('creas'));



/**
 * cadena.trim()
 * retorna la misma cadena de texto sin los espacios de los extremos
 * OJO: Los espacios en blanco internos, no cuentan, sólo los externos
 */

let email='tcjuan21@gmail.com';
let password='z   123456   y';

console.log(email.trim());
console.log(password.trim());


/**
 * cadena.replace(termino_a_reemplazar, termino_de_reemplazo)
 *Reemplaza con  termino_de_reemplazo en cada lugar donde
 se encuentre el termino_a_reemplazar
 
*/

let resultadoReplace=frase.replace('ñ','ni');
console.log(resultadoReplace);

// while(frase.indexOf(' ')!==-1){
//     let sinespacios=frase.replace(' ','');
// }
// console.log(sinespacios)


let resultadoReplace2=frase.replace(/\s/g,'');
console.log(resultadoReplace2);


/**
 * cadena.substr()
 */

let subcadena=frase.substr(8,5);
console.log(subcadena);