/**
 * Una de las propiedades más importantes de windows,
 * es el objeto "document"
 * que sirve para controlar los elementos internos del DOM
 * - crear etiquetas
 * - cambiar clases
 * - cambiar Estilos
 * - modificar textos
 * - capturar valores en los formularios,
 * - etc.
 * 
 */

console.log(window.document);


/*****
 * Propiedades del objeto document
 * 
 */

/**
 * document.getElementById("id_de_un_elemento_del_DOM")
 * Obtiene en una variable, la referencia a una etiqueta del DOM
 */

const titulo=document.getElementById('titulo');
console.log(titulo)
console.log(typeof titulo)
/**
 * document.getElementsByClassName("nombre_de_la_clase")
 * Obtiene en una "colección" (no Array) el conjunto de elementos
 * que comparten una misma clase
 */

const listItems=document.getElementsByClassName('list-item');
console.log(listItems);
console.log(listItems.length);

//Artificio para convertir 

const arregloListItems=Array.from(listItems);
console.log(arregloListItems);

/**
 * document.querySelector("selector_del_elemento_como_en_css")
 */

const parrafo1=document.querySelector('#parrafo1');
console.log(parrafo1);

/**
 * document.querySelectorAll("selector_del_elemento_como_en_css")
 */

const listItemsLi=document.querySelectorAll('li')
console.log(listItemsLi);

/**
 * document.createElement("etiqueta_a_crear")
 * Devuelve la referencia a un elemento creado desde JavaScript
 * OJO: No se significa que el elemento se encuentre en el DOM, 
 * sólo está creado
 */

//a es la etique de vínculo
const linkGoogle=document.createElement('a');
console.log(linkGoogle)


console.log(typeof titulo)