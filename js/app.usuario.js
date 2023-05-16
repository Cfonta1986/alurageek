const listaUsuario = () => {
    return fetch ("https://apialurageek-as70.onrender.com/usuarios").then((respuesta) => {
        return respuesta.json();
    });
};

const eliminarUsuario = (id) => {
    return fetch (`https://apialurageek-as70.onrender.com/usuarios/${id}`, {
        method: "DELETE",
    })
}

const crearUsuario = (usuario, email, contraseña) => {
    return fetch ("https://apialurageek-as70.onrender.com/usuarios/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario, email, contraseña, id: uuid.v4()}),
    })
}

const detalleUsuario = (id) => {
    return fetch ( `https://apialurageek-as70.onrender.com/usuarios/${id}`).then( respuesta => respuesta.json() )
}

const actualizarUsuario = (usuario, email, contraseña, id) => {
    return fetch ( `https://apialurageek-as70.onrender.com/usuarios/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ usuario, email, contraseña })
    }).then(respuesta => respuesta);
}

export const listandoUsuarios = {
    listaUsuario,
    eliminarUsuario,
    crearUsuario,
    detalleUsuario,
    actualizarUsuario,
};
