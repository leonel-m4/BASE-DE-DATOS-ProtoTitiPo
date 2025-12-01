var contenedor = document.getElementById("productsContainer");

var productos = [
    {
        nombre: "Polo Neon Wave",
        precio: 15,
        img: "/img/polos/polo6.jpeg"
    },
    {
        nombre: "Pantalón Chino Tapered Fit",
        precio: 135,
        img: "/img/pantalones/pant7.jpeg"
    },
    {
        nombre: "Polo Oversize Blanco",
        precio: 90,
        img: "/img/polos/polo1.jpeg"
    },
    {
        nombre: "Pantalón Mom Jeans",
        precio: 120,
        img: "/img/pantalones/pant1.jpeg"
    },
     {
        nombre: "Polo Urban Black",
        precio: 45,
        img: "/img/polos/polo2.jpeg"
    },
    {
        nombre: "Pantalón Palazzo",
        precio: 70,
        img: "/img/pantalones/pant2.jpeg"
    },
     {
        nombre: "Pantalón Flare",
        precio: 65,
        img: "/img/pantalones/pant6.jpeg"
    },
    {
        nombre: "Pantalón Cargo",
        precio: 110,
        img: "/img/pantalones/pant4.jpeg"
    }
];


contenedor.innerHTML = "";

productos.forEach((p, i) => {
    contenedor.innerHTML += `
        <div class="row">
            <a href="/products/productoIndex.html?id=${i}">
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
