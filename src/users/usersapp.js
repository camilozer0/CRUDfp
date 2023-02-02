import usersstore from "./store/usersstore";


// Esta va a ser mi aplicacion principal
export const UsersApp = async (element) => {

    // Mientras carga la informacion muestro el mensaje de carga
    element.innerHTML = 'loading...';

    // cuando llegue la informacion, la muestro
    await usersstore.loadNextPage();
}