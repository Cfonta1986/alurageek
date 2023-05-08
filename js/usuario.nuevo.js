import { listandoUsuarios } from "./app.usuario.js"

const formulario = document.querySelector("[data-formUsuario]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const usuario = document.querySelector("[data-nombreUsuario]").value;
    const email = document.querySelector("[data-emailUsuario]").value;
    const contraseña = document.querySelector("[data-contraseñaUsuario]").value;

    listandoUsuarios.crearUsuario(usuario, email, contraseña).then( respuesta => { console.log(respuesta)}).catch(err => console.log(err))

})