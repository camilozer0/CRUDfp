import usersstore from "../../store/usersstore";
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

}