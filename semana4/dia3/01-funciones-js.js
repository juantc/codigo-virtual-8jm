/***
 * FUNCIONES
 * Porcionesde código disponibles
 * para ejecutarlas en cualquier momento
 */
function tablaDeMultiplicar(n, limite=10){
    //let n=6;
    console.log(`**************Tabla del ${n}`)
    for (let i=0; i<limite; i++){
        console.log(`${n} x ${i}=${i*n}`);
    }
}


tablaDeMultiplicar(5,12);
tablaDeMultiplicar(6,15);
tablaDeMultiplicar(7);
tablaDeMultiplicar(8);

function factorial(n){
    let total=1;
    for(let i=n; i>0; i--) {
        total=total*i;
    }
    //console.log(`TOTAL EN FUNCION: ${total}`);
    return total;
}

console.log(`El factorial de 5 es: ${factorial(5)}`);


function sumar(a,b){
    return a+b;
}

let suma7y8=sumar(7,8);
let suma7y6y5y3=sumar(sumar(7,6),sumar(5,3));

console.log(`Sumando 7 y 8: ${suma7y8}`);
console.log(`Sumando 7,6,5 y 3: ${suma7y6y5y3}`);


/**
 * 
 */

function validarPasswords(ps1, ps2){
    if(ps1===ps2 && ps1.length>=6){
        return true;
        console.log("asdf")
    }
    console.log("A continuacion se retorna false");
    return false;
}

let resultado=validarPasswords("abcdefg","abcdefg");
console.log(resultado);