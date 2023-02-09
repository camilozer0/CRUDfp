
import './renderaddbutton.css';


// llamo la funcion callback, si quiero que el boton sea reutilizable, en este caso no se puede porque 
// el boton esta fijo (ver css)
// export const renderAddButton = (element, callback) => {
export const renderAddButton = (element) => {

    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    // se puede hacer de cualquier forma
    // fabButton.className = 'fab-button';
    element.append(fabButton);

    fabButton.addEventListener('click', () => {


        // delego el evento click del boton a que el padre me lo indique
        // en caso de que el boton fuera reutilizable
        // if (!callback) return;
        // callback();
    })

}