import { conexionAPI } from "./conexionAPI.js";


const lista = document.querySelector("[data-lista]")
const formulario = document.querySelector("[data-formulario]");

function crearCard(nombre, precio, imagen, id) {
    const producto = document.createElement("li");
    producto.classList.add("producto-Geek");
    producto.innerHTML =`    <div class="imgProducto">
    <img src="${imagen}" alt="posillo blanco trooper">
</div>
<div class="DescripcionProducto">
    <h3>${nombre}</h3>
    <img class="basura" data-id="${id}" src="../img/eliminar.png" alt="icono basura" >
    <p>${precio}</p>
</div>`;

const deleteButton = producto.querySelector(".basura");
deleteButton.addEventListener("click", () => {
    conexionAPI.deleteProduct(id)
        .then(() => {
            producto.remove();
        })
        .catch(err => console.log(err));
});

lista.appendChild(producto);
return producto;

}

const render = async () => {
    try {
        const listProducts = await conexionAPI.productList();
        listProducts.forEach(productos => {
            lista.appendChild(
                crearCard(
                    productos.nombre,
                    productos.precio,
                    productos.imagen,
                    productos.id)
            );

        });
    } catch (error) {
        console.log(error);
    }
};

formulario.addEventListener("submit", (evento) => {evento.preventDefault();


    const nombre=document.querySelector("[data-nombre]").value;
    const precio=document.querySelector("[data-precio]").value;
    const imagen=document.querySelector("[data-imagen]").value;

    conexionAPI
    .createProducts(nombre, precio, imagen)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
});



render();


