// async function listarProductos() {
//     const conexion = await fetch("http://localhost:3000/productos/");

//     const conexionConvertida = conexion.json();

//     return conexionConvertida
// }

// async function enviarProducto(nombre, precio, imagen) {
//     const conexion = await fetch("http://localhost:3000/productos/", {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({
//             nombre: nombre,
//             precio: precio,
//             imagen: imagen
//         })
//     });

//     const conexionConvertida = conexion.json();

//     return conexionConvertida;
// }
// async function eliminarProducto(id) {
//     try {
//         const response = await fetch(`http://localhost:3000/productos/${id}`, {
//             method: 'DELETE',
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
        
//         if (response.ok) {
//             console.log('Producto eliminado exitosamente');
//             // Aquí puedes actualizar la interfaz de usuario para reflejar el producto eliminado si es necesario
//         } else {
//             console.error('Error al eliminar el producto:', response.status);
//             // Aquí puedes manejar el error de alguna manera apropiada
//         }
//     } catch (error) {
//         console.error('Error al eliminar el producto:', error);
//         // Aquí puedes manejar el error de alguna manera apropiada
//     }
// }

// // Event listener para el icono de eliminar en el card del producto
// document.addEventListener('click', async function(event) {
//     if (event.target.classList.contains('basura')) {
//         // Obtener el card del producto más cercano al botón de eliminar
//         const cardProducto = event.target.closest('.contenedorProductos');
//         // Verificar si se encontró un card de producto
//         if (cardProducto) {
//             // Obtener el ID del producto a partir del atributo data-id en el card
//             const id = cardProducto.dataset.id;
            
//             // Confirmar la eliminación del producto
//             if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
//                 // Llamar a la función para eliminar el producto
//                 await eliminarProducto(id);
//                 // Eliminar el card del producto del DOM
//                 cardProducto.remove();
//             }
//         } else {
//             console.error('No se encontró el card de producto asociado al botón de eliminar.');
//         }
//     }
// });


// export const conexionAPI = {
//     listarProductos, enviarProducto, eliminarProducto
// }

const apiUrl = "http://localhost:3000/productos/";

// Funciones para la página web

const productList = () => {
    return fetch(apiUrl)
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

const createProducts = (nombre, precio, imagen) => {
    return fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nombre,
            precio,
            imagen,
        }),

    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

const deleteProduct = (id) => {
    return fetch(`${apiUrl}/${id}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .catch((err) => console.log(err));
};
export const conexionAPI = {
    productList,
    createProducts,
    deleteProduct,
}