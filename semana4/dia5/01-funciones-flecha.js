const suma = function (a, b) {
  return a + b;
};

const multiplicar=(a,b)=>{
    return a*b;
}

console.log(`5x8: ${multiplicar(5,8)}`);

/******
 * Las funciones anónimas pueden tener retornos implícitos
 * si el desarrollo de la función tiene una línea de código
 * CONSEJO
 * CUando queremos representar un retorno implícito, 
 * procurar encerrarlo en símbolo de parentesis
 */

const dividir=(a,b)=>a/b;
console.log(`9/3: ${dividir(9,3)}`);



/**
 * Di una función de flecha recibe 1 parámetro (exactamente 1)
 * pueden obviarse los paréntesis que encierrarn a ese parámetro
 
*/

const cuadrado=n=>n*n;
console.log(`Cuadrado de 9: ${cuadrado(9)}`);



/******
 * si una función de flecha no recibe parámetros, colocar 
 * la apertura y cierre de paréntesis
 * 
 * SI la función de flecha sólo tiene una línea de código de 
 * desarrollo, se pueden obviar las llaves
 */

const saludar=()=>console.log("Saludando!!!");
saludar();