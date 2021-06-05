/**
 * FUNCIONES ANONIMAS
 */

function buscarPorDNI(dni){

    setTimeout(function(){
        console.log("pasaron 3 segundos");
    },3000);


}

function miFuncion(){
    console.log("Soy miFuncion");
}

// function buscarPorDNI(dni,parametro2){
//     parametro2();
// }

// function buscarPorDNI(dni,parametro2){
//     setTimeout(function(){
//         parametro2();
//     },300)
// }

function buscarPorDNI(dni,parametro2){
        let respuesta="Jorge"
            parametro2("Jorge");
        parametro2(respuesta);
    }
   

//buscarPorDNI("42912414",miFuncion)
buscarPorDNI("42912414",function(nombre){
    console.log(`Resultado: ${nombre}`);
})

//function buscarPorDNI(dni,parametro2){
//     setTimeout(function(){
//         parametro2();
//     },300)
// }


const getNombres = (callback) => {
    fetch("https://reqres.in/api/users").then((peticion) => {
      return peticion.json();
    }).then(data => {
      let nombres = data.data.map(obj => obj.first_name);
      callback(nombres);
    })
  };

