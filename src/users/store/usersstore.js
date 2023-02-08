import { User } from "../models/user";
import { loadUsersByPage } from "../usecases/loadusersbypage";


const state = {
    currentPage: 0,
    users: [],
};


const loadNextPage = async () => {
    // aca se carga la primera pagina
    const users = await loadUsersByPage(state.currentPage + 1);
    // verifico que haya usuarios para mostrar, si no, que no haga nada
    if (users.length === 0) return;
    // si los hay aumento la pagina
    state.currentPage += 1;
    // actualizo el state
    state.users = users;
};


const loadPreviousPage = async () => {
    throw new ('No ha sido implementado');

};


const onUserChanged = () => {
    throw new ('No ha sido implementado');

};


const reloadPage = async () => {
    throw new ('No ha sido implementado');


};

export default {
    // exporto las funciones para que sean visibles
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
    // para tener acceso a la pagina actual y a los usuarios
    // creo dos funciones

    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users], // este objeto pasa por referncia

    /**
     * 
     * @returns {User[]}
     */
    getCurrentPage: () => state.currentPage // este primitivo pasa por valor
};

