let inputNombre=document.getElementById("inputNombre");
let selectPais=document.getElementById("selectPais");
let btnProcesar=document.getElementById("btnProcesar");

let btnValidar=document.getElementById('btnValidar');
btnProcesar.onclick=()=>{
    console.log(inputNombre.value);
    console.log(selectPais.value);
};


btnValidar.onclick=()=>{
    let nombre=inputNombre.value;
    let pais=+selectPais.value;


}
if (nombre===''){
    inputNombre.classList.add('input-error');
}else{
    
}