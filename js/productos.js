import { listandoProductos } from "./app.js"

const crearNuevoProducto = (foto,nombre,precio,id)=>{
    const contenedor = document.createElement("div");
    const contenido = `
            <div class="items__producto">
                <div class="items__imagen">
                    <img class="items__producto--img" alt="${nombre}" src="${foto}" />
                    <a href="/productos.editar.html?id=${id}" data-modificar id="${id}"><img class="boton__modificar" alt="modificar" src="./img/edit.png"/></a>
                    <button data-eliminar id="${id}"><img class="boton__eliminar" alt="eliminar" src="./img/delete.png" /></button>
                </div>
                <div class="items__contenido">
                    <h4 class="items__producto--titulo">${nombre}</h4>
                    <p class="items__producto--descripcion">${precio}</p>
                    <a href="/producto.unico.html?id=${id}"><button class="items__producto--boton">Ver producto</button></a>
                </div>
            </div>
            `;
    contenedor.setAttribute("class", "items__contenedor");
    contenedor.innerHTML = contenido;    
    document.body.appendChild(contenedor);
    const btnEliminar = contenedor.querySelector("[data-eliminar]");
    btnEliminar.addEventListener("click", () => {
        const id = btnEliminar.id;
        listandoProductos.eliminarProducto(id).then(respuesta => {
            console.log("respuesta");
        }).catch(err => alert ("Ocurrio un error"));
    })
    
    return contenedor;
}

const table = document.querySelector("[data-table]");

listandoProductos.listaProductos()
    .then((data) =>{
        data.forEach (( { foto, nombre, precio,id}) => {
        const nuevoProducto = crearNuevoProducto (foto, nombre, precio,id);
        table.appendChild(nuevoProducto);
});
}).catch((error) => alert("Ocurrio un error"));

