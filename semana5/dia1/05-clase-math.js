

/**
 * La clase Math tiene muchos métodos estáticos en su interior
 * que podemos usar sin necesidad de instanciar objetos
 */



console.log(`Raiz cuadrada de 81: ${Math.sqrt(81)}`);


console.log(`Redondeando 4.85: ${Math.round(4.85)}`)


/**
 * Math.ceil(numero)
 * Devuelve el techo de un número decimal
 * Ejm:
 * Techo de 3.11=> 4
 * Techo de 2.0001 =>3
 */

console.log(`Techo de 4.01: ${Math.ceil(4.01)}`)

/**
 * Math.floor(numero)
 * Devuelve el piso de un número decimal
 * Ejm:
 * Piso de 3.99 => 3
 * Piso de 
 */

console.log(`Piso de 8.99: ${Math.floor(8.99)}`)


/**
 * Obtener un número aleatorio entre dos números
 * dados
 * Math.random()
 */

let aleatorio=Math.random()*(40-20)+20;
console.log(aleatorio)


//Prpiedad de los Numbers para redondear o aplicar decimales
//a un número determinado

//number.toFixed(cantidad_de_decimales)

console.log(aleatorio.toFixed(2))