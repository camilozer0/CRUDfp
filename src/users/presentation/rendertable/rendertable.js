// Lo qeu se ponga aca va a impactar toda nuestra aplicacion, pero solo se cargue cuando se cargue el componente

import usersstore from "../../store/usersstore";
import "./rendertable.css";

// Solo las funciones que tengamos definidas aqui tienen acceso a esta table, por eso la defino aca
let table;

const createTable = () => {
    // aca se crea la tabla completamente
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    // en el headers van los titulos de las columnas
    tableHeaders.innerHTML = `
    <tr>
        <th>#ID<th/>
        <th>Balance<th/>
        <th>FirstName<th/>
        <th>LastName<th/>
        <th>Active<th/>
        <th>Actions<th/>
    <tr/>
    `;

    // en el body estaran los datos que voy a mostrar
    const tableBody = document.createElement('tbody');
    table.append(tableHeaders, tableBody);
    return table;
}


export const renderTable = (element) => {

    // Obtengo los datos para ser renderizados
    const users = usersstore.getUsers();

    // si la tabla no existe la creamos
    if (!table) {
        table = createTable();
        // no quiero borrar lo que haya previamente en la tabla por eso uso append en vez de children
        element.append(table);

        // TODO listeners en la tabla
    }

    let tableHTML = '';
    users.forEach(user => {
        tableHTML += `
        <tr>
            <td>${user.id}<td/>
            <td>${user.balance}<td/>
            <td>${user.firstName}<td/>
            <td>${user.lastName}<td/>
            <td>${user.isActive}<td/>
            <td>
                <a href="#/" data_id = "${user.id}"> select<a/>
                <a href="#/" data_id = "${user.id}"> delete<a/>
            <td/>
        <tr/>
        `;
    });
    // puedo buscar dentro de un element al igual que dentro de un documento
    table.querySelector('tbody').innerHTML = tableHTML;



}