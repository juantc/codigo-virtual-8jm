const URL_BASE='https://60c17d134f7e880017dbfae5.mockapi.io';

/**
 * Esta función obtiene las categorías de 
 * la BD
 */
const getCategorias=()=>{

    axios.get(`${URL_BASE}/categorias`).then((rpta)=>{
        console.log(rpta);
    })
    .catch((err)=>{console.log(error)});
;}

getCategorias();
