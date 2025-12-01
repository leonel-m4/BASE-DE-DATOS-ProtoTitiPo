document.addEventListener("DOMContentLoaded", () => {

    // BASE DE DATOS DE ACCESORIOS
    var productos = [
        {
            nombre: "Reloj de Pulsera Clásico",
            precio: 120,
            img: "/img/accesorios/accs1.jpeg",
            colores: ["Plateado", "Negro"],
            descripcion: ["Diseño clásico", "Correa ajustable", "Material duradero"]
        },
        {
            nombre: "Bufanda a Cuadros",
            precio: 55,
            img: "/img/accesorios/accs2.jpeg",
            colores: ["Rojo", "Azul"],
            descripcion: ["Tejido suave", "Estilo moderno", "Perfecta para invierno"]
        },
        {
            nombre: "Cinturón de Piel con Hebilla Minimalista",
            precio: 65,
            img: "/img/accesorios/accs3.jpeg",
            colores: ["Negro", "Marrón"],
            descripcion: ["Cuero premium", "Hebilla metálica", "Ajuste cómodo"]
        },
        {
            nombre: "Gafas de Sol Estilo Aviador",
            precio: 95,
            img: "/img/accesorios/accs4.jpeg",
            colores: ["Dorado", "Plateado"],
            descripcion: ["Protección UV", "Armazón resistente", "Clásico Aviador"]
        },
        {
            nombre: "Mochila de Cuero Elegante",
            precio: 140,
            img: "/img/accesorios/accs5.jpeg",
            colores: ["Marrón", "Negro"],
            descripcion: ["Alta capacidad", "Material premium", "Ideal para viajes"]
        },
        {
            nombre: "Collar con Dije Geométrico",
            precio: 35,
            img: "/img/accesorios/accs6.jpeg",
            colores: ["Dorado", "Plateado"],
            descripcion: ["Diseño único", "Ligero", "Estilo moderno"]
        },
        {
            nombre: "Brazaletes Apilables",
            precio: 45,
            img: "/img/accesorios/accs7.jpeg",
            colores: ["Oro Rosa", "Plateado"],
            descripcion: ["Set de brazaletes", "Elegantes", "Combinables"]
        },
        {
            nombre: "Gorro de Lana (Beanie)",
            precio: 30,
            img: "/img/accesorios/accs8.jpeg",
            colores: ["Negro", "Gris", "Beige"],
            descripcion: ["Suave y caliente", "Estilo casual", "Para todo el día"]
        }
    ];

    // OBTENER ID
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    // VALIDAR
    if (!productos[id]) {
        console.error("PRODUCTO NO EXISTE");
        return;
    }

    const producto = productos[id];

    // MOSTRAR DATOS
    document.getElementById("productoImagen").src = producto.img;
    document.getElementById("productoTitulo").textContent = producto.nombre;
    document.getElementById("productoPrecio").textContent = `S/. ${producto.precio}`;

    // COLORES
    document.getElementById("productoColores").innerHTML =
        producto.colores.map(c => `<option>${c}</option>`).join("");

    // DESCRIPCIÓN
    document.getElementById("productoDescripcion").innerHTML =
        producto.descripcion.map(d => `<li>${d}</li>`).join("");

});
