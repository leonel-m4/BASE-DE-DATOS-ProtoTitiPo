/* =====================================
   CARRITO GLOBAL (localStorage)
===================================== */
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

/* =====================================
   CONTADOR DEL CARRITO
===================================== */
function actualizarContador() {
    const badge = document.querySelector(".cart-count");
    if (!badge) return;

    badge.textContent = carrito.length;
}

/* =====================================
   BOTÓN FLOTANTE DEL CARRITO
===================================== */
const carritoBtn = document.createElement("div");
carritoBtn.classList.add("btn-carrito");

carritoBtn.innerHTML = `
    <i class="fa-solid fa-cart-shopping"></i>
    <span class="cart-count">0</span>
`;

document.body.appendChild(carritoBtn);

/* =====================================
   MODAL DEL CARRITO
===================================== */
const modal = document.createElement("div");
modal.classList.add("carrito-modal");

modal.innerHTML = `
    <div class="carrito-contenido">
        <span class="cerrar">&times;</span>
        <h2>TU CARRITO</h2>

        <div id="carrito-items"></div>

        <p class="carrito-total">
            Total: S/. <span id="total">0.00</span>
        </p>

        <button class="btn-comprar-final">
            Comprar ahora
        </button>
    </div>
`;

document.body.appendChild(modal);

/* =====================================
   ABRIR / CERRAR MODAL
===================================== */
const cerrarBtn = modal.querySelector(".cerrar");

carritoBtn.addEventListener("click", () => {
    mostrarCarrito();
    modal.classList.add("activo");
});

cerrarBtn.addEventListener("click", () => modal.classList.remove("activo"));

modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("activo");
});

/* =====================================
   MOSTRAR CARRITO
===================================== */
function mostrarCarrito() {
    const contenedor = document.getElementById("carrito-items");
    const totalEl = document.getElementById("total");

    contenedor.innerHTML = "";
    let total = 0;

    carrito.forEach((p, index) => {

        const item = document.createElement("div");
        item.classList.add("item-carrito");

        item.innerHTML = `
            <img src="${p.imagen}" class="img-carrito">

            <div>
                <h4>${p.titulo}</h4>
                <p>Color: ${p.color}</p>
                <p>Talla: ${p.talla}</p>
                <p>Cantidad: ${p.cantidad}</p>
                <p>Precio: S/. ${p.precio}</p>

                <button class="btn-eliminar" data-index="${index}">
                    Eliminar
                </button>
            </div>
        `;

        contenedor.appendChild(item);

        total += p.precio * p.cantidad;
    });

    totalEl.textContent = total.toFixed(2);

    document.querySelectorAll(".btn-eliminar").forEach(btn => {
        btn.addEventListener("click", () => {
            carrito.splice(btn.dataset.index, 1);
            guardarCarrito();
            mostrarCarrito();
            actualizarContador();
        });
    });
}

/* =====================================
   BOTÓN COMPRAR
===================================== */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-comprar-final")) {
        if (carrito.length === 0) {
            alert("Tu carrito está vacío 🛒");
            return;
        }

        window.location.href = "https://leonel-m4.github.io/BASE-DE-DATOS-ProtoTitiPo/pedido.html";  // IR A LA PÁGINA DE PEDIDO
    }
});


/* =====================================
   ACTUALIZAR CONTADOR AL INICIO
===================================== */
actualizarContador();
