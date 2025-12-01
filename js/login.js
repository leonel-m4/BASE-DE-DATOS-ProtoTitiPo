document.addEventListener("DOMContentLoaded", () => {

    const header = document.getElementById("header");
    header.innerHTML = `
        <nav class="nav">
            <a href="/" class="nav-logo">Mi tienda</a>
            <ul class="nav-links">
                <li><a href="/">Inicio</a></li>
                <li><a href="/productos.html">Productos</a></li>
                <li><a href="/login.html" id="login-link">Login</a></li>
            </ul>
        </nav>
    `;

    const loginLink = document.getElementById("login-link");

    const tabs = document.querySelectorAll(".login-tab");
    const forms = document.querySelectorAll(".login-form");

    const containerLogin = document.querySelector(".login-container");
    const boxPerfil = document.getElementById("user-profile");

    const nombrePerfil = document.getElementById("user-name");
    const emailPerfil = document.getElementById("user-email");

    const btnLogout = document.getElementById("logout-btn");

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            forms.forEach(f => f.classList.remove("login-active"));
            document.getElementById(tab.dataset.tab).classList.add("login-active");
        });
    });

    // LOGIN
    document.getElementById("login-form").addEventListener("submit", e => {
        e.preventDefault();

        let email = e.target.querySelector(".login-email").value;
        let pass = e.target.querySelector(".login-pass").value;

        let usuario = usuarios.find(u => u.email === email && u.pass === pass);

        if (!usuario) return alert("❌ Usuario o contraseña incorrectos");

        localStorage.setItem("user", JSON.stringify(usuario));
        mostrarPerfil(usuario);
    });

    // REGISTRO
    document.getElementById("signup-form").addEventListener("submit", e => {
        e.preventDefault();

        let nombre = e.target.querySelector(".signup-nombre").value;
        let email = e.target.querySelector(".signup-email").value;
        let pass = e.target.querySelector(".signup-pass").value;

        if (usuarios.some(u => u.email === email))
            return alert("❌ El correo ya está registrado");

        let nuevoUsuario = { 
            nombre, 
            email, 
            pass
        };

        usuarios.push(nuevoUsuario);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        localStorage.setItem("user", JSON.stringify(nuevoUsuario));

        mostrarPerfil(nuevoUsuario);
    });

    // MOSTRAR PERFIL (sin fecha)
    function mostrarPerfil(usuario) {
        containerLogin.style.display = "none";
        boxPerfil.style.display = "block";

        nombrePerfil.textContent = usuario.nombre;
        emailPerfil.textContent = usuario.email;

        loginLink.textContent = "Perfil";
        loginLink.href = "/login.html";
    }

    // LOGOUT
    btnLogout.addEventListener("click", () => {
        localStorage.removeItem("user");
        boxPerfil.style.display = "none";
        containerLogin.style.display = "block";

        loginLink.textContent = "Login";
        loginLink.href = "/login.html";
    });

    // SESIÓN ACTIVA
    const userGuardado = JSON.parse(localStorage.getItem("user"));
    if (userGuardado) mostrarPerfil(userGuardado);
});
