var contenedor = document.getElementById("productsContainer");

var productos = [
    {
        nombre: "Reloj de Pulsera Clásico",
        precio: 120,
        img: "/img/accesorios/accs1.jpeg"
    },
    {
        nombre: "Bufanda a Cuadros",
        precio: 55,
        img: "/img/accesorios/accs2.jpeg"
    },
    {
        nombre: "Cinturón de Piel con Hebilla Minimalista",
        precio: 65,
        img: "/img/accesorios/accs3.jpeg"
    },
    {
        nombre: "Gafas de Sol Estilo Aviador",
        precio: 95,
        img: "/img/accesorios/accs4.jpeg"
    },
    {
        nombre: "Mochila de Cuero Elegante",
        precio: 140,
        img: "/img/accesorios/accs5.jpeg"
    },
    {
        nombre: "Collar con Dije Geométrico",
        precio: 35,
        img: "/img/accesorios/accs6.jpeg"
    },
    {
        nombre: "Brazaletes Apilables",
        precio: 45,
        img: "/img/accesorios/accs7.jpeg"
    },
    {
        nombre: "Gorro de Lana (Beanie)",
        precio: 30,
        img: "/img/accesorios/accs8.jpeg"
    }
];


contenedor.innerHTML = "";

productos.forEach((p, i) => {
    contenedor.innerHTML += `
        <div class="row">
            <a href="/products/productoAccsesorios.html?id=${i}">
                <img src="${p.img}" alt="">
            </a>
            <div class="product_text">
                <h5>Sale</h5>
            </div>
            <div class="price">
                <h4>${p.nombre}</h4>
                <p>S/. ${p.precio}</p>
            </div>
        </div>
    `;
});
