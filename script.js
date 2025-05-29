document.addEventListener("DOMContentLoaded", function () {
    // =================== CARGAR PASEADORES ===================
    fetch("paseadores.json")
        .then(response => response.json())
        .then(data => {
            const paseadores = data.paseadores;
            const paseadoresContainer = document.getElementById("paseadoresContainer");

            paseadores.forEach(paseador => {
                const div = document.createElement("div");
                div.classList.add("paseador");

                div.innerHTML = `
                    <img src="${paseador.foto}" alt="${paseador.nombre}">
                    <h3>${paseador.nombre}</h3>
                    <span class="badge ${getCategoria(paseador.calificacion)}">${getBadgeText(paseador.calificacion)}</span>
                    <p class="estrellas">${getEstrellas(paseador.calificacion)}</p>
                    <p>${paseador.descripcion}</p>
                    <p class="precio">${getPrecio(paseador.calificacion)}</p>
                    <button class="agendar-btn" data-nombre="${paseador.nombre}">AGENDAR PASEO</button>
                `;

                paseadoresContainer.appendChild(div);
            });

            document.querySelectorAll(".agendar-btn").forEach(button => {
                button.addEventListener("click", function () {
                    const usuarioRegistrado = localStorage.getItem("usuario"); 
                    if (!usuarioRegistrado) {
                        alert("DEBE REGISTRARTE PARA CONTINUAR CON EL PASEO.");
                    } else {
                        abrirModal(this.getAttribute("data-nombre"));
                    }
                });
            });
        })
        .catch(error => console.error("Error cargando el JSON:", error));

    function getCategoria(calificacion) {
        if (calificacion >= 5) return "certificado";
        if (calificacion >= 4) return "experiencia";
        return "residente";
    }

    function getBadgeText(calificacion) {
        if (calificacion >= 5) return "👑 Certificado";
        if (calificacion >= 4) return "❤️ Experiencia";
        return "🌿 Residente";
    }

    function getPrecio(calificacion) {
        if (calificacion >= 5) return "$12.000 COP / hora";
        if (calificacion >= 4) return "$8.000 COP / hora";
        return "$6.000 COP / hora";
    }

    function getEstrellas(calificacion) {
        let estrellas = "";
        for (let i = 1; i <= 5; i++) {
            estrellas += i <= calificacion ? "⭐" : "☆";
        }
        return estrellas;
    }

   

    // =================== LOGIN MODAL ===================
    const modal = document.getElementById("loginModal");
    const icon = document.getElementById("login-icon");
    const closeBtn = document.querySelector(".close");
    const loginForm = document.getElementById("loginForm");
    const loginError = document.getElementById("loginError");

    icon.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (validarUsuario(username, password)) {
            alert("Bienvenido, " + username);
            localStorage.setItem("usuario", username);
            modal.style.display = "none";
            window.location.reload();
        } else {
            loginError.style.display = "block";
        }
    });

    // =================== SESIÓN DE USUARIO ===================
    const loginIcon = document.getElementById("login-icon");
    let usuarioActual = localStorage.getItem("usuario");

    if (usuarioActual) {
        loginIcon.title = "Cerrar sesión";
        loginIcon.innerHTML = '<i class="fas fa-sign-out-alt"></i>';
        loginIcon.addEventListener("click", function () {
            localStorage.removeItem("usuario");
            alert("Has cerrado sesión.");
            window.location.reload();
        });
    } else {
        loginIcon.title = "Iniciar sesión";
        loginIcon.innerHTML = '<i class="fas fa-user"></i>';
    }

        });

        //===================BANNER=========================
      
  let index = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
  }

  // Mostrar el primer slide
  showSlide();

  // Cambiar slide cada 4 segundos
  setInterval(showSlide, 4000);

  //=======hamburger==========
  const menuToggle = document.getElementById('menu-toggle');
  const navUl = document.querySelector('nav ul');
  
  menuToggle.addEventListener('click', () => {
    if (navUl.style.display === 'block') {
      navUl.style.display = 'none';
    } else {
      navUl.style.display = 'block';
    }
  });
  
