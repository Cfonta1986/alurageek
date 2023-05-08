import { listandoProductos } from "./app.js"

const formulario = document.querySelector("[data-form]");

const obtenerInfo = () => {
    const url = new URL (window.location);
    const id = url.searchParams.get("id");

    const foto = document.querySelector("[data-urlProducto]");
    const categoría = document.querySelector("[data-categoriaProducto]");
    const nombre = document.querySelector("[data-nombreProducto]");
    const precio = document.querySelector("[data-precioProducto]");
    const descripcion = document.querySelector("[data_descripcionProducto]");

    listandoProductos.detalleProducto(id).then( productos => {
        foto.value = productos.foto;
        categoría.value = productos.categoria;
        nombre.value = productos.nombre;
        precio.value = productos.precio;
        descripcion.value = productos.descripcion;
    } )
}

obtenerInfo();

formulario.addEventListener("submit", (evento)=> {
    evento.preventDefault();

    const url = new URL (window.location);
    const id = url.searchParams.get("id");

    const foto = document.querySelector("[data-urlProducto]").value;
    const categoría = document.querySelector("[data-categoriaProducto]").value;
    const nombre = document.querySelector("[data-nombreProducto]").value;
    const precio = document.querySelector("[data-precioProducto]").value;
    const descripcion = document.querySelector("[data_descripcionProducto]").value;
    
    listandoProductos.actualizarProducto(foto, categoría, nombre, precio, descripcion, id).then(() => {
        window.location.href="/edicion.producto.concluido.html";
    });
});

