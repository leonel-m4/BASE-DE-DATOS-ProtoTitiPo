var contenedor = document.getElementById("productsContainer");

var productos = [
    {
        nombre: "Pantalón Mom Jeans",
        precio: 120,
        img: "/img/pantalones/pant1.jpeg"
    },
    {
        nombre: "Pantalón Palazzo",
        precio: 70,
        img: "/img/pantalones/pant2.jpeg"
    },
    {
        nombre: "Pantalón Skinny Fit",
        precio: 85,
        img: "/img/pantalones/pant3.jpeg"
    },
    {
        nombre: "Pantalón Cargo",
        precio: 110,
        img: "/img/pantalones/pant4.jpeg"
    },
    {
        nombre: "Pantalón Straight Leg",
        precio: 75,
        img: "/img/pantalones/pant5.jpeg"
    },
    {
        nombre: "Pantalón Flare",
        precio: 65,
        img: "/img/pantalones/pant6.jpeg"
    },
    {
        nombre: "Pantalón Chino Tapered Fit",
        precio: 135,
        img: "/img/pantalones/pant7.jpeg"
    },
    {
        nombre: "Pantalón Paperbag",
        precio: 95,
        img: "/img/pantalones/pant8.jpeg"
    }
];


contenedor.innerHTML = "";

productos.forEach((p, i) => {
    contenedor.innerHTML += `
        <div class="row">
            <a href="/products/productoPantalon.html?id=${i}">
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
