document.addEventListener("DOMContentLoaded", () => {

  /* HEADER HTML */
  const headerEl = document.getElementById("header");
  if (headerEl) {
    headerEl.innerHTML = `
  <div class="navbar">
    <div class="logo"><img src="/img/logo.png" alt=""></div>
    <ul class="links">
      <li><a href="/Index.html">Inicio</a></li>
      <li><a href="/Polos.html">Polos</a></li>
      <li><a href="/Pantalones.html">Pantalones</a></li>
      <li><a href="/Accesorios.html">Accesorios</a></li>
    </ul>
    <div class="right_menu">
      <a href="#" class="search"><i class="fa-solid fa-magnifying-glass"></i></a>
      <input type="text" id="search_input" placeholder="Buscar..." style="display:none;">
      <a href="/Login.html" class="user"><i class="fa-solid fa-user"></i></a>
    </div>
  </div>
`;
  }

  /* CONTACT HTML */
  const contactEl = document.getElementById("contact");
  if (contactEl) {
    contactEl.innerHTML = `
      <div class="contact_info">
        <div class="firts_info">
          <img src="/img/logo.png" alt="">
          <p>Sector D MZ.D LT. 31 <br> Urb. Los Angeles de Vitarte</p>
          <p>+51 916 796 360</p>
          <p>luis.maldonado@tecsup.edu.pe</p>
          <div class="social">
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
          </div>
        </div>
        <div class="second_info">
          <h4>Soporte</h4>
          <p>Acerca de la página</p>
          <p>Guía</p>
          <p>Compras y Devoluciones</p>
          <p>Privacidad</p>
        </div>
        <div class="third_info">
          <h4>Tienda</h4>
          <p>Compras para hombres</p>
          <p>Compras para mujeres</p>
          <p>Compras para niños</p>
          <p>Descuentos</p>
        </div>
        <div class="fourth_info">
          <h4>Compañía</h4>
          <p>Acerca de</p>
          <p>Iniciar sesión</p>
        </div>
      </div>
    `;
  }

  /* FOOTER HTML */
  const footerEl = document.getElementById("end_text");
  if (footerEl) {
    footerEl.innerHTML = `
      <p>Copyright © @2025. All Rights Reserved.Designd By AMSARO</p>
    `;
  }

  /* MENU HAMBURGUESA */
  const menu = document.querySelector("#toogle_btn_icon");
  const navmenu = document.querySelector(".links");

  if (menu && navmenu) {
    menu.onclick = () => {
      menu.classList.toggle("bx-x");
      navmenu.classList.toggle("open");
    };
  }

  /* HEADER STICKY */
  const headerSticky = document.querySelector("header");
  if (headerSticky) {
    window.addEventListener("scroll", () => {
      headerSticky.classList.toggle("sticky", window.scrollY > 0);
    });
  }

});

