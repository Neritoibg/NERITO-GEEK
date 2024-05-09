async function listarProductos() {
    const conexion = await fetch("http://localhost:3000/productos/");

    const conexionConvertida = conexion.json();

    return conexionConvertida
}

async function enviarProducto(nombre, precio, imagen) {
    const conexion = await fetch("http://localhost:3000/productos/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    });

    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

async function borrarProducto() {
    const conexion = await fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
    });

    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

export const conexionAPI = {
    listarProductos, enviarProducto, borrarProducto
}