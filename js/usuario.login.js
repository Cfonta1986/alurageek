import { listandoUsuarios } from "./app.usuario.js"

const formulario = document.querySelector("[data-formLogin]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const correo = document.querySelector("[data-mail]").value;
    const password = document.querySelector("[data-password]").value;

    

    listandoUsuarios.listaUsuario(correo, password).then((usuarios) => {
        
        const cliente = usuarios.filter( obj => obj.email == correo );
        const clientep = cliente[0].contraseña;
        
        if ( clientep == password ){
            return window.location.href="./productos.html"
        } else { alert ("Usuario o Contraseña equivocados")}
    });
});