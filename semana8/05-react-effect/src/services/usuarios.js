export const getUsuarios=async()={
    let response = await fetch(`https://reqres.in/api/usuarios`)
    let rpta=await response.json();

    return rpta;
}