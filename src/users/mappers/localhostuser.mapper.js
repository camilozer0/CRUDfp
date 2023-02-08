/* Mappers
Sirven para desacoplar la parte de desarrollo de la parte del front
Permite a la aplicacion que al hacer un cambio en la parte del back no hay que rehacer todo en el front
Una funcion que recibe un objeto y genera una instancia

/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */

import { User } from "../models/user";


export const localhostUserToModel = (localhostUser) => {

    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name
    } = localhostUser;


    // Si la variable es igual a la que llega no hay que poner las dos, simplemente se copia
    // las dos unicas que cambian son last_name y first_name, por eso aparecen
    return new User({
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name
    });

}