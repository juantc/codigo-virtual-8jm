const formulario=document.querySelector('#formulario');
const inputColor=document.querySelector('#inputColor');
const btnGuardar=document.querySelector('#btnGuardar');
const btnBorrar=document.querySelector('#btnBorrar');
const body=document.querySelector('body');

formulario.onsubmit=(e)=>{
    e.preventDefault();
    const color=inputColor.value;
    body.style.backgroundColor=color;
    localStorage.setItem('colorFondo',color);
};

(()=>{
    if(localStorage.getItem('colorFondo')){
        body.style.backgroundColor=localStorage.getItem('colorFondo');
        inputColor.value=localStorage.getItem("colorFondo");
    }
})();

