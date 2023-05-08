import { listandoUsuarios } from "./app.usuario.js"

const formulario = document.querySelector("[data-form]");

const obtenerInfo = () => {
    const url = new URL (window.location);
    const id = url.searchParams.get("id");

    const usuario = document.querySelector("[data-nombreUsuario]");
    const email = document.querySelector("[data-emailUsuario]");
    const contraseña = document.querySelector("[data-contraseñaUsuario]");

    listandoUsuarios.detalleUsuario(id).then ( usuarios => {
        usuario.value = usuarios.usuario;
        email.value = usuarios.email;
        contraseña.value = usuarios.contraseña;
    })

}
obtenerInfo();

formulario.addEventListener ("submit", (evento) => {
    evento.preventDefault();
    const url = new URL (window.location);
    const id = url.searchParams.get("id");

    const usuario = document.querySelector("[data-nombreUsuario]").value;
    const email = document.querySelector("[data-emailUsuario]").value;
    const contraseña = document.querySelector("[data-contraseñaUsuario]").value;

    listandoUsuarios.actualizarUsuario(usuario, email, contraseña, id).then(() => {
        window.location.href="./usuario.edicion.concluida.html";
    });

});