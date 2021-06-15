const BASE_URL='https://60c17d134f7e880017dbfae5.mockapi.io';

export const getCategorias=async()=>{
    const response = await fetch(`${BASE_URL}/categorias`,{
        method:'GET'
    });
    const rpta=await response.json();
    return rpta;
};

//yo
export const getVehiculos=async()=> {
    const response=await fetch(`${BASE_URL}/vehiculos`,{
        method:'GET'
    });
    const rpta=await response.json();
    return rpta;
};