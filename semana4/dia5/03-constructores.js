//son funciones que crean objetos con algunas características preestablecidas

const Plato=()=>{

    let objPlato={
        nombre:"",
        precio:0,
        ingredientes:[]
    }
    return objPlato;
}

let ceviche=Plato();
let seco=Plato();

//**Llenando las caracteristicas de ambos */



/**
 * ERROR
 */

let vehiculo={
    marca:"",
    tipo:"",
    color:"",
    anio:0,
}

let carroJorge=vehiculo;
let carroEmily=vehiculo;

carroJorge.marca="mazda";

console.log(carroJorge);
console.log(carroEmily);

/*
ceviche.nombre="Ceviche";
ceviche.precio=30.00;
ceviche.ingredientes={pescado,limón,sal,pimienta,cebolla}
console.log(ceviche)

console.log(seco)*/