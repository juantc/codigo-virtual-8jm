/**
 * OBJETOS EN JAVASCRIPT
 * No son arreglos, no son string, no son números
 */
let cpu={
    ram: 16,
    nucleos: 8, 
    discoSolido: "1Tb",
    enfriamientoLiquido: false
}

console.log(cpu)

//modificando una propiedad del objeto
cpu.ram=8;
console.log(cpu)

////////////////////////////////

let plato={
    nombre: "Asado de tira",
    precio: 39.00,
    ingredientes: ["carne de res","papas","legumbres"]
}

/*Cómo agregar un ingrediente al objeto plato?? */

plato.ingredientes.push("chorizo")
plato.ingredientes[0]="carne de res corte asdo de tira"
console.log(plato)



let objTrabajador={
    datosPersonales:{
        nombre: "Juan",
        apellido: "Torres",
        edad:29
    },
    cargo: "software developer",
    sueldo: 950.00
}

console.log(objTrabajador);

/**Como agregar un atributo a un objeto?? */

objTrabajador.datosPersonales.telefono="999888777"

console.log(objTrabajador);


let ajiGallina={
    imprimirIngredientes:function(){
        console.log("Imprimir ingredientes");
        console.log("Listando los ingredientes");
        for(let i=0;i<ajiGallina.ingredientes.length;i++){
            console.log(`${ajiGallina.ingredientes[i].cant} ${ajiGallina.ingredientes[i].um} de ${ajiGallina.ingredientes[i].nombre}`)
        }
    },
    agregarIngredientes:function(unidadMedida,cantidad,nombre){
        //
        //Realizar el algoritmo para poder ejecutar la funcion
        //agregarIngredientes y agregar un nuevo 
        
        let objetoIngrediente={
            nombre: nombre,
            um:unidadMedida,
            cant:cantidad
        }
        ajiGallina.ingredientes.push(objetoIngrediente);
       
    },
    nombre: "Aji de gallina",
    precio: 12.00,
    ingredientes:[ //aquí un arreglo de objetos
        {
        nombre:"Gallina",
        um: "pechuga",
        cant:1,
        },
       {
        nombre: "Aji amarillo",
        um: "gramos",
        cant:200
        }]
}
console.log("************");
ajiGallina.imprimirIngredientes();

ajiGallina.agregarIngredientes("unidades",7,"aceituna");
ajiGallina.agregarIngredientes("unidades",5,"huevos");

ajiGallina.imprimirIngredientes();

//console.log(ajiGallina);

// console.log("Listando los ingredientes");

// for(let i=0;i<ajiGallina.ingredientes.length;i++){
//     console.log(`${ajiGallina.ingredientes[i].cant} ${ajiGallina.ingredientes[i].um} de ${ajiGallina.ingredientes[i].nombre}`)
// }

// //JavaScript Object Notation (JSON)

