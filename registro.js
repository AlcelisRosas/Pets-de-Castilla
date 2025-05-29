document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("inicio-link").addEventListener("click", function (event) {
        event.preventDefault();
        let respuesta = confirm("Tu formulario no ha sido guardado, ¿quieres continuar?");
        if (respuesta) {
            window.location.href = "../index.html";
        }
    });

    document.getElementById("registroForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const propietario = {
            nombre: document.getElementById("nombrePropietario").value,
            identificacion: document.getElementById("identificacion").value,
            telefono: document.getElementById("telefono").value,
            emergencia: document.getElementById("emergencia").value,
            torre: document.getElementById("torre").value,
            claveAcceso: document.getElementById("claveAcceso").value,
            peludo: {
                nombre: document.getElementById("nombrePeludo").value,
                tipo: document.getElementById("tipoPeludo").value,
                raza: document.getElementById("raza").value,
                edad: document.getElementById("edad").value,
                discapacidad: document.getElementById("discapacidad").value,
                enfermedad: document.getElementById("enfermedad").value,
                medicamento: document.getElementById("medicamento").value,
                caracter: document.getElementById("caracter").value
            }
        };

        fetch("http://localhost:3000/registro", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(propietario)
        })
        .then(response => response.json())
        .then(data => {
            alert("Registro exitoso!");
            document.getElementById("registroForm").reset();
        })
        .catch(error => console.error("Error al registrar:", error));
    });
});
// colores de caracter
document.addEventListener("DOMContentLoaded", function () {
    const selectedOption = document.querySelector(".selected-option");
    const optionsList = document.querySelector(".options");
    const selectedColor = document.getElementById("selected-color");
    const selectedText = document.getElementById("selected-text");

    // Mostrar/Ocultar las opciones al hacer clic
    selectedOption.addEventListener("click", function () {
        optionsList.style.display = optionsList.style.display === "block" ? "none" : "block";
    });

    // Asignar el color y texto seleccionados
    document.querySelectorAll(".options li").forEach(option => {
        option.addEventListener("click", function () {
            selectedText.textContent = this.textContent;
            selectedColor.className = "color-circle " + this.dataset.value;
            optionsList.style.display = "none";
        });
    });

    // Cerrar el selector si se hace clic fuera
    document.addEventListener("click", function (e) {
        if (!selectedOption.contains(e.target) && !optionsList.contains(e.target)) {
            optionsList.style.display = "none";
        }
    });
});


