import { listandoProductos } from "./app.js"

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const foto = document.querySelector("[data-urlProducto]").value;
    const categoria = document.querySelector("[data-categoriaProducto]").value;
    const nombre = document.querySelector("[data-nombreProducto]").value;
    const precio = document.querySelector("[data-precioProducto]").value;
    const descripcion = document.querySelector("[data_descripcionProducto]").value;

    console.log(foto, " + ", categoria, " + ", nombre, " + ", precio, " + ", descripcion)

    listandoProductos.crearProductos(foto,categoria,nombre,precio,descripcion).then( respuesta => {
        console.log (respuesta)
    } ).catch (err => console.log(err))
    
} )