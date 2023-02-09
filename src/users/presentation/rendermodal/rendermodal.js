// importo el html, pero como es html uso el '?raw', solo funciona en vite
// en otros gestores (webpack) hay que investigar
import modalHtml from "./rendermodal.html?raw";
import './rendermodal.css';

let modal, form;

// creo esta clase para mostrar el modal
// TODO cargar usuario por ID
export const showModal = () => {
    // si el modal existe mostrarlo
    modal?.classList.remove('hide-modal');
}

// creo esta clase para esconder el modal
export const hideModal = () => {
    modal?.classList.add('hide-modal');
    // TODO reset del formulario

}

export const renderModal = (element) => {
    // verifico que el modal esta creado,
    // si es asi lo uso, sino lo creo
    if (modal) return;

    // creo un div, y dentro de el pinto el "modal"
    modal = document.createElement('div');
    modal.innerHTML = modalHtml;

    // le anado dos clases al modal
    modal.className = 'modal-container hide-modal';

    // creo una variable para escuchar saber cuando envio un formulario
    form = modal.querySelector('form');

    // este evento solo se ejecuta una vez haya pintado el modal en pantalla, de resto no escucha
    // una vez que escuche ubico el lugar y dependiendo del mismo
    // desaparezco el modal
    modal.addEventListener('click', (event) => {

        // verifico que la clase sea 'modal-container' y hago que desaparezca
        if (event.target.className === 'modal-container') {
            // llamo la funcion para esconder el modal
            hideModal();
        }
    });

    // escucho cuando se envia un formulario
    form.addEventListener('click', (event) => {
        // evito que el formulario se envie, para realizar las acciones que quiera
        event.preventDefault();
    });

    // creo el modal
    element.append(modal);


}