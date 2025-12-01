document.addEventListener("DOMContentLoaded", () => {

    const resumenEl = document.getElementById("resumen-pedido");
    const totalValorEl = document.getElementById("total-valor");
    const form = document.getElementById("form-pedido");
    const final = document.getElementById("mensaje-final");

    // Cargar carrito desde localStorage
    let carrito = JSON.parse(localStorage.getItem("carrito") || "[]");

    // Si carrito vacío, avisar y redirigir al inicio
    if (!carrito || carrito.length === 0) {
        resumenEl.innerHTML = `<p style="color:#b0b0b0; padding:10px;">Tu carrito está vacío. Agrega productos antes de finalizar el pedido.</p>`;
        form.style.display = "none";
        totalValorEl.textContent = "0.00";
        return;
    }

    // Renderizar items con imagenes
    function renderResumen() {
        resumenEl.innerHTML = "";
        let total = 0;

        carrito.forEach((p, i) => {
            const subtotal = (parseFloat(p.precio) || 0) * (parseInt(p.cantidad) || 1);
            total += subtotal;

            const item = document.createElement("div");
            item.className = "resumen-item";

            item.innerHTML = `
                <img class="mini-img" src="${p.imagen || p.img || '/img/logo.png'}" alt="${(p.titulo || p.nombre) || 'Producto'}">
                <div class="info">
                    <div class="titulo">${(p.titulo || p.nombre) || 'Producto'}</div>
                    <div class="detalle">Color: ${p.color || '-'} • Talla: ${p.talla || '-'}</div>
                </div>
                <div class="precio-cantidad">
                    <div>S/. ${(parseFloat(p.precio) || 0).toFixed(2)}</div>
                    <div>Cantidad: ${p.cantidad || 1}</div>
                    <div style="margin-top:6px; color:#ff4382; font-weight:700;">S/. ${subtotal.toFixed(2)}</div>
                </div>
            `;

            resumenEl.appendChild(item);
        });

        totalValorEl.textContent = total.toFixed(2);
    }

    renderResumen();

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Recalcular total por si cambió algo
        let total = 0;
        carrito.forEach(p => total += (parseFloat(p.precio) || 0) * (parseInt(p.cantidad) || 1));

        let pedido = {
            nombre: document.getElementById("nombre").value,
            direccion: document.getElementById("direccion").value,
            telefono: document.getElementById("telefono").value,
            entrega: document.getElementById("entrega").value,
            pago: document.getElementById("pago").value,
            productos: carrito.map(p => ({
                titulo: p.titulo || p.nombre,
                precio: p.precio,
                cantidad: p.cantidad,
                imagen: p.imagen || p.img || ""
            })),
            total: total.toFixed(2),
            fecha: new Date().toLocaleString(),
            idPedido: 'PED-' + Date.now()
        };

        // Guardar pedido (puedes enviar este objeto al servidor o whatsapp)
        localStorage.setItem("pedido", JSON.stringify(pedido));

        // Vaciar carrito
        localStorage.removeItem("carrito");
        carrito = [];

        // Mostrar mensaje final
        form.style.display = "none";
        resumenEl.style.display = "none";
        document.getElementById("total-pedido").style.display = "none";
        final.style.display = "block";

        // Opcional: mostrar en consola o abrir whatsapp con texto resumen
        console.log("Pedido guardado:", pedido);
    });

});
