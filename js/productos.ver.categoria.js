import { listandoProductos } from "./app.js"

const crearNuevoProducto = (foto,nombre,precio, categoria, id)=>{
    const contenedor = document.createElement("div");
    const contenido = `
            <div class="items__producto">
                <img class="items__producto--img" alt="${nombre}" src="${foto}" />
                <div class="items__contenido">
                    <h4 class="items__producto--titulo" id="${categoria}">${nombre}</h4>
                    <p class="items__producto--descripcion">${precio}</p>
                    <a href="./producto.unico.html?id=${id}"><button class="items__producto--boton">Ver producto</button></a>
                </div>
            </div>
            `;
    contenedor.setAttribute("class", "items__contenedor");
    contenedor.innerHTML = contenido;    
    return contenedor;
}

const table = document.querySelector("[data-table]");

listandoProductos.listaProductos()
    .then((data) => {
        data.forEach(( { foto, nombre, precio, categoria, id }) => {
        const nuevoProducto = crearNuevoProducto (foto, nombre, precio, categoria, id );        
        
        if (categoria == "Star Wars" ) { table.appendChild(nuevoProducto);}

});
}).catch((error) => alert("Ocurrio un error"));

const table2 = document.querySelector("[data-table2]");

listandoProductos.listaProductos()
    .then((data) => {
        data.forEach(( { foto, nombre, precio, categoria, id }) => {
        const nuevoProducto = crearNuevoProducto (foto, nombre, precio, categoria, id );        
        
        if (categoria == "Consolas" ) { table2.appendChild(nuevoProducto);}

});
}).catch((error) => alert("Ocurrio un error"));

const table3 = document.querySelector("[data-table3]");

listandoProductos.listaProductos()
    .then((data) => {
        data.forEach(( { foto, nombre, precio, categoria, id }) => {
        const nuevoProducto = crearNuevoProducto (foto, nombre, precio, categoria, id );        
        
        if (categoria == "Diversos" ) { table3.appendChild(nuevoProducto);}

});
}).catch((error) => alert("Ocurrio un error"));
