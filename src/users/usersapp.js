import { renderAddButton } from "./presentation/renderaddbutton/renderaddbutton";
import { renderButtons } from "./presentation/renderbuttons/renderbuttons";
import { renderTable } from "./presentation/rendertable/rendertable";
import usersstore from "./store/usersstore";


// Esta va a ser mi aplicacion principal
export const UsersApp = async (element) => {

    // Mientras carga la informacion muestro el mensaje de carga
    element.innerHTML = 'loading...';

    // cuando llegue la informacion, la muestro
    await usersstore.loadNextPage();

    // una vez que recibo los datos ya no necesito seguir mostrando el loading...s
    element.innerHTML = '';


    renderTable(element);
    renderButtons(element);
    renderAddButton(element, () => console.log('mirame amigo'));
}