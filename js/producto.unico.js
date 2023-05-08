import { listandoProductos } from "./app.js"

  const url = new URL (window.location);
  const id = url.searchParams.get("id");

const verProductoUnico = (producto) => {
  const productoUnico = document.querySelector("[data-productoUnico]");
  const contenedor = document.createElement("div");
  const contenido = `
    <img class="productoUnico__img" src="${producto.foto}" alt="${producto.nombre}">
    <div class="producto__unico-div">
      <h3 class="items__titulo">${producto.nombre}</h3>
      <p class="menu__inferior--titulo">${producto.precio}</p>
      <p>${producto.descripcion}</p>
    </div>
  `;
  contenedor.setAttribute("class", "productoUnico");
  contenedor.innerHTML = contenido;
  productoUnico.appendChild(contenedor);
  return contenedor;
};

listandoProductos.listaProductos().then((data) => {
  const producto = data.find(productos => productos.id === id);
if (producto) {
  verProductoUnico(producto);
}
});