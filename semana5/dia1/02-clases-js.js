/**
 * Las clases son estructuras que permiten crear 
 * objetos con las propiedades y métodos que tienen
 * sus clases Padres
 */

class Producto{
    descripcion='';
    precio=0;
    color='';
   // constructor(des='',precio='', color='');
    imprimirDatos = function (){
        console.log("** Datos del Producto **");
        console.log(`Nombre: ${this.descripcion}`);
        console.log(`Precio: S/. ${this.precio}`);
        console.log(`Color: ${this.color}`);
    };

}

let objProducto1=new Producto('Play Station 5',4000,'blanco');
objProducto1.descripcion='Play Station 5';
objProducto1.color='gris';
objProducto1.precio=3500.00;

//console.log(objProducto1)
objProducto1.imprimirDatos();

let objProducto2=new Producto();

console.log(objProducto2);


let arreglo1=[90,8,7];
let arreglo2=new Array();

arreglo2.push(50);
arreglo2.push(34);
arreglo2.push(8);


console.log(arreglo1);
console.log(arreglo2);


let edad=29;
let edad2=new Number(20);
console.log(edad);
console.log(edad2);

let rpta=edad+edad2;
console.log(rpta);