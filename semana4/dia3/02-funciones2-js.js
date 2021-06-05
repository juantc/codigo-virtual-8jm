/**
 * 
 * @param {*} r 
 * @returns 
 */
function areaCirculo(r){


    function cuadrado(n){
        return n*n;
    }

    let rpta=cuadrado(r)*3.1415;
    return rpta;
}

let circulo12=areaCirculo(12);
console.log(`Area del círculo con r=12: ${circulo12}`);

/**
 * Función que busca un nombre dentro de un arreglo
 * de nombres y retorna la posición en la que se encuentra 
 * el nombre buscado
 * Si el nombre no existe, retorna -1
 * @param {String} nombre 
 * @param {Array} nombres 
 */
function buscarNombre(nombre,nombres){

    for(let i=0;i<nombres.length;i++){
        if(nombres[i]==nombre){
            return i;
        }
    }


}

let names=["juan","carlos","diana","roxana","dora"];

let posicion=buscarNombre("roxana",names);
//console.log(posicion);
if(posicion>=0){
    console.log(`Encontrado en la posicion ${posicion}`);
}else{
    console.log(`Ups! no se encontró el nombre de la BD`);
}
