"use strict";
const formulario=document.querySelector("#formulario");

formulario.onSubmit=(e) => {
    e.preventDefault();
    // const producto ={
    //     nombre: e.target[0].value,
    //     precio: e.target[1].value,
    // }
    console.log(e)
}