console.log(window);

/**
 * El objeto Window representa a todo el navegador
 * tiene funciones para controlar el DOM, funciones para 
 * imprimir en consola, para mostrar alertas, para calcular
 * el tamaño del viewport, etc.
 * 
 * OJO, muchos métodos y propiedades de window se escriben 
 * sin tener que colocar el objeto window como tal.
 * POR EJEMPLO:
 * 
 * prompt, console, alert, entre otros.
 */


window.console.log('hola');
/**
 * window.innerWidth
 * devuelve el ancho del viewport
 */

console.log(`Ancho del viewport: ${window.innerWidth}`);


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