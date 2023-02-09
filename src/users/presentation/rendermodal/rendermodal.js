// importo el html, pero como es html uso el '?raw', solo funciona en vite
// en otros gestores (webpack) hay que investigar
import modalHtml from "./rendermodal.html?raw";
import './rendermodal.css';

let modal;

export const renderModal = (element) => {


    // verifico que el modal esta creado,
    // si es asi lo uso, sino lo creo
    if (modal) return;

    // creo un div, y dentro de el pinto el "modal"
    modal = document.createElement('div');
    modal.innerHTML = modalHtml;

    // le anado dos clases al modal
    modal.className = 'modal-container hide-modal';

    element.append(modal);


}