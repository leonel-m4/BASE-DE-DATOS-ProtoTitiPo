document.addEventListener("DOMContentLoaded", () => {

    // BASE DE DATOS DE PANTALONES
   var productos = [
        {
            nombre: "Polo Neon Wave",
            precio: 15,
            img: "/img/polos/polo6.jpeg",
            colores: ["Verde Neón", "Azul Neón"],
            tallas: ["S", "M"],
            descripcion: ["Color llamativo", "Streetwear", "Tela suave"]
        },
        {
            nombre: "Pantalón Chino Tapered Fit",
            precio: 135,
            img: "/img/pantalones/pant7.jpeg",
            colores: ["Beige", "Negro"],
            tallas: ["S", "M", "L", "XL"],
            descripcion: ["Chino moderno", "Corte tapered", "Ligero"]
        },
        {
            nombre: "Polo Oversize Blanco",
            precio: 90,
            img: "/img/polos/polo1.jpeg",
            colores: ["Blanco", "Negro"],
            tallas: ["S", "M", "L", "XL"],
            descripcion: ["100% algodón", "Oversize", "Tela fresca"]
        },
        {
            nombre: "Pantalón Mom Jeans",
            precio: 120,
            img: "/img/pantalones/pant1.jpeg",
            colores: ["Azul", "Celeste", "Plomo"],
            tallas: ["S", "M", "L", "XL"],
            descripcion: ["Tiro alto clásico", "Corte recto", "Material denim grueso"]
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
            nombre: "Pantalón Palazzo",
            precio: 70,
            img: "/img/pantalones/pant2.jpeg",
            colores: ["Mostaza", "Beige"],
            tallas: ["S", "M", "L"],
            descripcion: ["Tela ligera", "Cintura elástica", "Ideal para verano"]
        },
        {
            nombre: "Pantalón Flare",
            precio: 65,
            img: "/img/pantalones/pant6.jpeg",
            colores: ["Negro", "Azul"],
            tallas: ["S", "M", "L"],
            descripcion: ["Pierna acampanada", "Retro", "Tela suave"]
        },
        {
            nombre: "Pantalón Cargo",
            precio: 110,
            img: "/img/pantalones/pant4.jpeg",
            colores: ["Plomo", "Negro"],
            tallas: ["S", "M", "L"],
            descripcion: ["Bolsillos laterales", "Duradero", "Corte recto"]
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