import usersstore from "../../store/usersstore";
import { renderTable } from "../rendertable/rendertable";
import "./renderbuttons.css";


export const renderButtons = (element) => {

    // creo los botones para ir a siguiente pagina
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next >';

    // para ir a pagina anterior
    const prevButton = document.createElement('button');
    prevButton.innerText = 'Previous <';

    // y el numero de pagina actual en el que me encuentro
    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerHTML = usersstore.getCurrentPage();

    element.append(prevButton, currentPageLabel, nextButton);


    nextButton.addEventListener('click', async () => {
        // se espera la ejecucion de carga de la siguiente pagina
        await usersstore.loadNextPage();
        // se cambia el valor de la pagina
        currentPageLabel.innerText = usersstore.getCurrentPage();
        // se vuelve a renderizar la tabla para mostrar los nuevos datos
        renderTable(element);

    });

    prevButton.addEventListener('click', async () => {
        await usersstore.loadPreviousPage();
        currentPageLabel.innerText = usersstore.getCurrentPage();
        renderTable(element);

    })

}