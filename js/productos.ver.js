import { listandoProductos } from "./app.js"

const crearNuevoProducto = (foto,nombre,precio,id)=>{
    const contenedor = document.createElement("div");
    const contenido = `
            <div class="items__producto">
                <img class="items__producto--img" alt="${nombre}" src="${foto}" />
                <div class="items__contenido">
                    <h4 class="items__producto--titulo">${nombre}</h4>
                    <p class="items__producto--descripcion">${precio}</p>
                    <a href="./producto.unico.html?id=${id}" id="${id}"><button class="items__producto--boton">Ver producto</button></a>
                </div>
            </div>
            `;
    contenedor.setAttribute("class", "items__contenedor");
    contenedor.innerHTML = contenido;    
    document.body.appendChild(contenedor);
    return contenedor;
}

const table = document.querySelector("[data-table]");

listandoProductos.listaProductos()
    .then((data) =>{
        data.forEach (( { foto, nombre, precio, id}) => {
        const nuevoProducto = crearNuevoProducto (foto, nombre, precio, id);
        table.appendChild(nuevoProducto);
});
}).catch((error) => alert("Ocurrio un error"));
