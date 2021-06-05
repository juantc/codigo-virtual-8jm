let linkGoogle = document.getElementById("linkGoogle");
let divCuadrado = document.getElementById("divCuadrado");

let selectPais = document.getElementById("selectPais");
let selectDpto = document.getElementById("selectDpto");

let inputNombre=document.getElementById("inputNombre");
let inputMensaje=document.getElementById("inputMensaje");
let letras=document.getElementById("letras");

let formulario=document.getElementById("formulario");

linkGoogle.onclick = (e) => {
  e.preventDefault();
  console.log("Click en Link Google");
};

divCuadrado.onclick = () => {
  console.log("clic divcuadrado");
  console.log(e);
};

// selectPais.onchange =()=>{
//     console.log(e);
// }

let paises = [
  { id: 12343, nombre: "Perú" },
  { id: 12, nombre: "México" },
  { id: 13, nombre: "China" },
  { id: 19, nombre: "Argentina" },
];

let departamentos = [
  { id: 22, nombre: "Lima", idPais: 12343, stock: true },
  { id: 23, nombre: "Puno", idPais: 12343, stock: false },
  { id: 24, nombre: "Wujan", idPais: 13, stock: false },
  { id: 25, nombre: "Acapulco", idPais: 12, stock: true },
  { id: 26, nombre: "Fujian", idPais: 13, stock: false },
  { id: 27, nombre: "Buenos Aires", idPais: 19, stock: true },
  { id: 28, nombre: "Cordova", idPais: 19, stock: false },
  { id: 29, nombre: "Tulum", idPais: 12, stock: true },
];


let datos = {
  nombre: "",
  mensaje: "",
};


const llenarPaises = () => {};
llenarPaises();
(() => {
  console.log("aaaaaaaaaaaaasssbbb");
  paises.forEach((pais) => {
    let option = document.createElement("option");
    option.value = pais.id;
    option.innerText = pais.nombre;
    selectPais.append(option);
  });
})(); //ejecuta al toque

selectPais.onchange = (e) => {
  selectDpto.innerHTML = `<option value="0">--Seleccione Dpto--</option>`;
  console.log(e);

  /**
   * Cada vez que cambie el valor del selectPais,
   * se debe de cargar la lista de departamentos que le pertencen
   * Si el valor del país es 0, se deberá limpiar los options
   * del selectDpto
   */
  let idPais = +selectPais.value;
  departamentos.forEach((dpto) => {
    if (dpto.idPais === idPais) {
      let option = document.createElement("option");
      option.value = dpto.id;
      option.innerText = dpto.nombre;
      selectDpto.append(option);
    }
  });
};

divCuadrado.onmouseover=(e)=>{
    console.log(e);

    /**
     * Se dispara el evento cuando el mouse ingresa al área que ocupa
     * un elemento.
     */
}

divCuadrado.onmouseout=(e)=>{
    console.log(e);
}


inputNombre.onkeyup=(e)=>{
    console.log(inputNombre.value);
}

inputMensaje.onkeyup=()=>{
/**
 * 
 */
let texto=inputMensaje.value;
let caracteres=texto.length;
if(caracteres>50){

}else{
    letras.innerText=50-caracteres;
}

}


// btnAnterior.removeAttribute('disabled');
// 	if (n === imagenes.length - 1) {
// 		btnSiguiente.setAttribute('disabled', true);
// 	}
const setData=(e)=>{
  datos[e.target.name]=e.target.value;
}

inputNombre.onkeyup=(e)=>{
  setData(e);
  console.log("nombre",e.target.name);
  console.log(inputNombre.value)
}
inputMensaje.onkeyup=(e)=>{
  setData(e);
  console.log("Mensaje",e.target.name);
  console.log(inputMensaje.value)
}

formulario.onsubmit=(e)=>{
  e.preventDefault();
  console.log("Mi submit funciona")
  console.log(datos);

  const regexLetras=new RegExp("^[a-zA-Zñ]");

  console.log(datos.nombre);
  if(regexLetras.test(datos.nombre)){
    if(regexLetras.test(datos.mensaje)){
      console.log("Todo OK");
    }
  }else{
    console.error("Todo mal");
  }
}

