const materials=[
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log(materials.map(material=>material.length))

console.log(materials.map(x=>x.length))


// Función tradicional
// function bob (a){
//     return a + 100;
//   }
  
  // Función flecha
//  let bob = a => a + 100;


let bob = a => a + 100;
let x=bob(50)
console.log(x)


let nom="Juan";

console.log(nom)

console.log(typeof(nom))