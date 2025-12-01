document.addEventListener("DOMContentLoaded", () => {

    // BASE DE DATOS DE PANTALONES
    var productos = [
    {
        nombre: "Polo Oversize Blanco",
        precio: 90,
        img: "/img/polos/polo1.jpeg",
        colores: ["Blanco", "Negro"],
        tallas: ["S", "M", "L", "XL"],
        descripcion: ["100% algodón", "Oversize", "Tela fresca"]
    },
    {
        nombre: "Polo Urban Black",
        precio: 45,
        img: "/img/polos/polo2.jpeg",
        colores: ["Negro"],
        tallas: ["S", "M", "L"],
        descripcion: ["Diseño urbano", "Tela suave", "Duradero"]
    },
    {
        nombre: "Polo Street Plateado",
        precio: 60,
        img: "/img/polos/polo3.jpeg",
        colores: ["Plateado", "Plateado oscuro"],
        tallas: ["S", "M", "L"],
        descripcion: ["Estilo moderno", "Comodidad total", "Secado rápido"]
    },
    {
        nombre: "Polo Classic",
        precio: 85,
        img: "/img/polos/polo4.jpeg",
        colores: ["Negro","Blanco"],
        tallas: ["S", "M", "L", "XL"],
        descripcion: ["Diseño clásico", "Cuello reforzado", "Premium"]
    },
    {
        nombre: "Polo Minimalista",
        precio: 30,
        img: "/img/polos/polo5.jpeg",
        colores: ["Blanco", "Beige"],
        tallas: ["S", "M", "L"],
        descripcion: ["Minimalista", "Ligero", "Transpirable"]
    },
    {
        nombre: "Polo Neon Wave",
        precio: 15,
        img: "/img/polos/polo6.jpeg",
        colores: ["Verde Neón","Azul Neón"],
        tallas: ["S", "M"],
        descripcion: ["Color llamativo", "Streetwear", "Tela suave"]
    },
    {
        nombre: "Polo Skull Edition",
        precio: 95,
        img: "/img/polos/polo7.jpeg",
        colores: ["Blnco","Negro"],
        tallas: ["M", "L", "XL"],
        descripcion: ["Edición especial", "Estampado Skull", "Alta calidad"]
    },
    {
        nombre: "Polo Gold Style",
        precio: 70,
        img: "/img/polos/polo8.jpeg",
        colores: ["Dorado", "Dorado oscuro"],
        tallas: ["S", "M", "L"],
        descripcion: ["Detalles dorados", "Elegante", "Tela premium"]
    }
];

    // OBTENER ID DE LA URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    // VALIDAR
    if (!productos[id]) {
        console.error("PRODUCTO NO EXISTE");
        return;
    }

    const producto = productos[id];

    // INSERTAR DATOS
    document.getElementById("productoImagen").src = producto.img;
    document.getElementById("productoTitulo").textContent = producto.nombre;
    document.getElementById("productoPrecio").textContent = `S/. ${producto.precio}`;

    // Colores
    document.getElementById("productoColores").innerHTML =
        producto.colores.map(c => `<option>${c}</option>`).join("");

    // Tallas
   document.getElementById("productoTallas").innerHTML =
    producto.tallas.map(t => `<button type="button" class="talla">${t}</button>`).join("");


    // Descripción
    document.getElementById("productoDescripcion").innerHTML =
        producto.descripcion.map(d => `<li>${d}</li>`).join("");
});

// Activar talla seleccionada
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('talla')) {
        document.querySelectorAll('.talla').forEach(btn => btn.classList.remove('activa'));
        e.target.classList.add('activa');
    }
});