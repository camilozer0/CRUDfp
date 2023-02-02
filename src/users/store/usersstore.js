

const state = {
    currentPage: 0,
    users: [],
};


const loadNextPage = async () => {
    throw new ('No ha sido implementado');
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
    getUser: () => [...state.users], // este objeto pasa por referncia
    getCurrentPage: () => state.currentPage // este primitivo pasa por valor
};

