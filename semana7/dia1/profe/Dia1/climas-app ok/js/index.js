import { getClimaByCiudad } from './servicios.js';
import { gebid } from './utils.js';

const URL_ICONS='http://openweathermap.org/img/wn/';

const formBusqueda = gebid("formBusqueda");
const inputBusqueda = gebid("inputBusqueda");
const cardsContainer = gebid("cards__container");

const ctx = gebid('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [
            {
                label: '# of Votes',
                data: [],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});



const actualizarGrafico=(climas)=>{
  //crear un arreglo de labels 

  let ejeX=climas.map((clima)=>{
    let fecha=new Date(clima.dt*1000);
   
    let formatoFecha = `${fecha
      .getDate()
      .toLocaleString('es-ES', { minimumIntegerDigits: 2 })}-${(
      fecha.getMonth() + 1
    ).toLocaleString('es-ES', {
      minimumIntegerDigits: 2
    })}-${fecha.getFullYear()} ${fecha
      .getHours()
      .toLocaleString('es-ES', { minimumIntegerDigits: 2 })}:${fecha
      .getMinutes()
      .toLocaleString('es-ES', { minimumIntegerDigits: 2 })}:${fecha
      .getSeconds()
      .toLocaleString('es-ES', { minimumIntegerDigits: 2 })}`;
  
  }

  })
  

const llenarCards = (climas) => {
  let cardsString = '';
  climas.forEach((clima) => {
    cardsString += `<div class="card">
						<div class="card-body d-flex">
							<figure>
								<img src="${URL_ICONS}${clima.weather[0].icon}@4x.png" alt="">
							</figure>

							<div class="card__info w-100 text-center">
								<div class="display-4">${clima.main.temp}</div>
								<p class="card-text text-muted">
									14 - Junio - 2021    - 21:00
								</p>
							</div>
						</div>
					</div>`;
  });
  cardsContainer.innerHTML=cardsString;
  console.log(climas);
};

formBusqueda.onsubmit = (e) => {
  e.preventDefault();
  getClimaByCiudad(inputBusqueda.value).then((rpta) => {
    if (+rpta.cod === 200) {
      llenarCards(rpta.list);
    } else {
        //lanzar mensaje
    }
  });
};
