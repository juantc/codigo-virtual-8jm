import {peliculas}from './data.js';

var ctx = document.getElementById('myChart').getContext('2d');

/**
 * Hacer algo para obtener en un arreglo la lsita de nombres de peliculas
 * Hacer algo para obtener en otro arreglo la lista de votos por pelicula
 */

const nombres=peliculas.map((peli)=>peli.title);
const votos=peliculas.map((peli)=>peli.vote_count);


const maxvotos=Math.max(votos);
console.log(maxvotos);

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: nombres,
        datasets: [{
            label: '# de Votos',
            data: votos,

            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    

    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});