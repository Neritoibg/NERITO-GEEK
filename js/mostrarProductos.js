import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearCard(nombre, precio, imagen) {
    const producto = document.createElement("li");
    producto.className = "producto__item";
    producto.innerHTML = `    <div class="imgProducto">
    <img src="${imagen}" alt="posillo blanco trooper">
</div>
<div class="DescripcionProducto">
    <h3>${nombre}</h3>
    <img src="../img/eliminar.png" alt="icono basura">
    <p>${precio}</p>
</div>`;

    return producto;
}

async function listarProductos() {
    const listaAPI = await conexionAPI.listarProductos()

    listaAPI.forEach(producto => lista.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen)))
}

listarProductos();

