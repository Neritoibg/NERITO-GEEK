import { conexionAPI } from "./conexionAPI.js";


const eliminar = document.querySelector("[data-lista]");

async function borrarProducto(evento){

    evento.preventDefault();

    const nombre=document.querySelector("[data-nombre]").value;
    const precio=document.querySelector("[data-precio]").value;
    const imagen=document.querySelector("[data-imagen]").value;

    await conexionAPI.borrarProducto(nombre,precio,imagen);
}

eliminar.addEventListener("click", evento => borrarProducto(evento));