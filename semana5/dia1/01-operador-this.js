let objPersona={
    nombre: 'Juan',
    apellido: 'Torres',
    mostrarDatos: function(){
     //   console.log(`${objPersona.nombre} ${objPersona.apellido}`);
     console.log(`${this.nombre} ${this.apellido}`);
    },
};

objPersona.mostrarDatos();


/**Creación de clases de forma tradicional en JS */

function Persona(){
    this.nombre="Juan";
    this.edad=36;
    this.apellido="Torres";
    //para usar el operador THIS, no se debe usar funciones
    //de flecha

    this.imprimirInfo=function(){
        console.log(`${this.nombre} ${this.apellido} con ${this.edad} años`);
    }
}

let objPersona1 = new Persona()
objPersona1.imprimirInfo();