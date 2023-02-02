

export const loadUsersByPage = async (page = 1) => {

    // Este va a ser el URL para hacer la peticion
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    // uso la funcion fetch para llamar a la url y hacer la conexion
    const res = await fetch(url);
    // despues de hacer la conexion a la base de datos, extraigo el archivo y lo guardo en 'data'
    const data = await res.json();

    console.log(data);
}