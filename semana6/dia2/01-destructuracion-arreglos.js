/**
 * destructuracion en arreglos
 */

let edades=[12,52,32,16,85,42,15];

//forma de copiar correctamente un arreglo
//let nuevasEdades=edades;


//forma de copiar correctamente un arreglo
let nuevasEdades=[...edades];  //operador sprit

//Obtener una copia de un arreglo y agregarle dos elementos
let nuevasEdadesMasDOs=[...nuevasEdades,20,80];

console.log(edades);
console.log(nuevasEdades);
console.log(nuevasEdadesMasDOs);


//Obtener los dos primeros elementos del arreglo edades
let [n1,n2]=edades;
console.log(n1);console.log(n2);

let [n5]=edades;
console.log(n5);



console.log('***********')


let [numero1, numero2, ...resto]=edades;

console.log(numero1);console.log(numero2);
console.log('***********')
console.log(resto);

//Operador rest
const numeros=(...elementos)=>{
    console.log(elementos);
}

numeros(45,12,19,18,74,15);

//Ejemplo:

/**
 * Función que recibe el nombre de una ciudad
 * y retorna en un arreglo de 2 elementos
 * la latitud y la longitud de dicha ciudad
 * @param {*} nombre 
 */
const getCoordenadasPorNombreCiudad=(nombre)=>{
    let rpta=[-14.5281, -62.165];
    return rpta;

};

const [lat, lon]=getCoordenadasPorNombreCiudad('Puno');

console.log(`Latitud: ${lat}`);
console.log(`Longitud: ${lon}`);
