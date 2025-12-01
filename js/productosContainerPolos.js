var contenedor = document.getElementById("productsContainer");

var productos = [
    {
        nombre: "Polo Oversize Blanco",
        precio: 90,
        img: "/img/polos/polo1.jpeg"
    },
    {
        nombre: "Polo Urban Black",
        precio: 45,
        img: "/img/polos/polo2.jpeg"
    },
    {
        nombre: "Polo Street Plateado",
        precio: 60,
        img: "/img/polos/polo3.jpeg"
    },
    {
        nombre: "Polo Negro Classic",
        precio: 85,
        img: "/img/polos/polo4.jpeg"
    },
    {
        nombre: "Polo Minimalista Arena",
        precio: 30,
        img: "/img/polos/polo5.jpeg"
    },
    {
        nombre: "Polo Neon Wave",
        precio: 15,
        img: "/img/polos/polo6.jpeg"
    },
    {
        nombre: "Polo Skull Edition",
        precio: 95,
        img: "/img/polos/polo7.jpeg"
    },
    {
        nombre: "Polo Gold Style",
        precio: 70,
        img: "/img/polos/polo8.jpeg"
    }
];

contenedor.innerHTML = "";

productos.forEach((p, i) => {
    contenedor.innerHTML += `
        <div class="row">
            <a href="/products/productoPolos.html?id=${i}">
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
