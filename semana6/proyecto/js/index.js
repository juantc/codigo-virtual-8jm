import { peliculas } from "./data.js";

const contenedor = document.getElementById('contenedor');
const spanNombrePelicula=document.getElementById('spanNombrePelicula');
const staticBackdrop=document.getElementById('staticBackdrop');
const modalPelicula=new bootstrap.Modal('staticBackdrop');

const base_url_imagenes = "https://image.tmdb.org/t/p/w500";

const abrirModal=(objPelicula)=>{
    spanNombrePelicula.innerText=objPelicula.title;
    modalPelicula.show();
};

const dibujarPeliculas = () => {
  peliculas.forEach((objPelicula) => {
    let col = document.createElement("div");
    col.classList.add("col-md-3", "mb-3");

    let card = document.createElement("div");
    card.classList.add("card", "shadow");

    let smallText = "";
    if (objPelicula.adult === true) {
      smallText = `<small class="text-danger">+18 años</small>`;
    } else {
      smallText = `<small class="text-sucess">Apta para todos</small>`;
    }

    card.innerHTML = `<img src="${base_url_imagenes}${objPelicula.poster_path}" alt="" class="card-img-top">
 <div class="card-body">
     <h4 class="card-title">${objPelicula.title}</h4>
     <p class="card-text">
         ${objPelicula.overview}
     </p>
     <p class="card-text">
         <small class="text-danger">+18 años</small>
         <small class="text-success">Apta para todos</small>
     </p>

 </div>`;

 let cardFooter=document.createElement('div');
 cardFooter.classList.add('card-footer');

 let buttonOpenModal=document.createElement('button');
 buttonOpenModal.classList.add('btn','btn-outline-primary');



buttonOpenModal.onclick(()=>{
abrirModal(objPelicula);
  })


 cardFooter.append(buttonOpenModal);
 card.append(cardFooter);

 col.append(card);
contenedor.append(col);
  });
};

dibujarPeliculas();
