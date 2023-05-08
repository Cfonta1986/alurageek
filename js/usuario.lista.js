import { listandoUsuarios } from "./app.usuario.js"

const listarUsuario = (usuario, email, id) => {
    const contenedor = document.createElement("tr");
    const contenido = `
        <td>${usuario}</td>
        <td>${email}</td>
        <td>
            <ul class="botones">
                <li><a href="./usuario.modificar.html?id=${id}" class="btnModificar">Editar</a></li>
                <li><button type="button" id=${id} class="btnEliminar">Eliminar</button></li>
            </ul>
        </td>
    `;
    contenedor.innerHTML = contenido;
    document.body.appendChild(contenedor);

    const botonEliminar = contenedor.querySelector("button");
    botonEliminar.addEventListener("click", () => {
        const id = botonEliminar.id;
        listandoUsuarios.eliminarUsuario(id).then( respuesta => {
            console.log ("respuesta");
        }).catch(err => alert ("Ocurrió un error"));
    })

    return contenedor;
};

const table = document.querySelector("[data-table]");

listandoUsuarios.listaUsuario().then(
    (data) => {
        data.forEach(({ usuario, email, id }) => {
            const nuevoUsuario = listarUsuario (usuario, email, id);
            table.appendChild(nuevoUsuario);
        });
    }).catch((error) => alert("Ocurrio un error"));
