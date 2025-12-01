document.addEventListener("DOMContentLoaded", () => {
    const btnAgregar = document.querySelector(".btn-agregar");
    if (!btnAgregar) return;

    btnAgregar.addEventListener("click", (e) => {
        e.preventDefault();

        // TÍTULO
        const titulo = document.querySelector(".producto-titulo")?.textContent?.trim() || "";

        // PRECIO
        const precioTexto = document.querySelector(".producto-precio")?.textContent || "0";
        const precio = parseFloat(precioTexto.replace("S/.", "").replace("S/", "").trim());

        // IMAGEN
        const imagen = document.querySelector(".producto-imagen img")?.src || "";

        // COLOR
        const color = document.querySelector(".select-color")?.value || "";

        // CANTIDAD
        const cantidad = parseInt(document.querySelector(".input-cantidad")?.value) || 1;

        // TALLA (correcto para botones)
        let talla = "";
        const tallaActiva = document.querySelector(".talla.activa");
        if (tallaActiva) {
            talla = tallaActiva.textContent.trim();
        }

        // OBJETO PRODUCTO
        const producto = { titulo, precio, imagen, color, cantidad, talla };

        // GUARDAR EN CARRITO
        carrito.push(producto);
        guardarCarrito();
        actualizarContador();

        alert("Producto agregado al carrito 🛒");
    });
});
