var contenedor = document.getElementById("productsContainer");

var base = "https://leonel-m4.github.io/BASE-DE-DATOS-ProtoTitiPo";

var productos = [
    {
        nombre: "Polo Oversize Blanco",
        precio: 90,
        img: base + "/img/polos/polo1.jpeg"
    },
    {
        nombre: "Polo Urban Black",
        precio: 45,
        img: base + "/img/polos/polo2.jpeg"
    },
    {
        nombre: "Polo Street Plateado",
        precio: 60,
        img: base + "/img/polos/polo3.jpeg"
    },
    {
        nombre: "Polo Negro Classic",
        precio: 85,
        img: base + "/img/polos/polo4.jpeg"
    },
    {
        nombre: "Polo Minimalista Arena",
        precio: 30,
        img: base + "/img/polos/polo5.jpeg"
    },
    {
        nombre: "Polo Neon Wave",
        precio: 15,
        img: base + "/img/polos/polo6.jpeg"
    },
    {
        nombre: "Polo Skull Edition",
        precio: 95,
        img: base + "/img/polos/polo7.jpeg"
    },
    {
        nombre: "Polo Gold Style",
        precio: 70,
        img: base + "/img/polos/polo8.jpeg"
    }
];

contenedor.innerHTML = "";

productos.forEach((p, i) => {
    contenedor.innerHTML += `
        <div class="row">
            <a href="products/productoPolos.html?id=${i}">
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
