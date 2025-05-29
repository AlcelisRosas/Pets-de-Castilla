document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("gallery");
    const popup = document.getElementById("popup");
    const popupOverlay = document.getElementById("popup-overlay");
    const popupImage = document.getElementById("popup-image");
    const popupInfo = document.getElementById("popup-info");
    const popupDogName = document.getElementById("popup-dog-name");
    const popupColor = document.getElementById("popup-color");
    const popupColorText = document.getElementById("popup-color-text");
    const popupWalkerLink = document.getElementById("popup-walker-link");

    const paseadores = [
        { nombre: "Carlos Henao", color: "blue", significado: "Es amigable y juguetón" },
        { nombre: "Ana Gomez", color: "green", significado: "Es un perro tranquilo y sociable" },
        { nombre: "Pedro Ramírez", color: "red", significado: "Es mejor no acercarse al perro" },
        { nombre: "Esther Fernández", color: "yellow", significado: "Es un perro curioso y explorador" },
        { nombre: "Sofia Martinez", color: "purple", significado: "Es muy enérgico y necesita ejercicio" },
        { nombre: "Miguel Torres", color: "orange", significado: "Es un perro lleno de vida y alegre" },
        { nombre: "Carmen Sanchez", color: "pink", significado: "Es un perro cariñoso y tranquilo" },
        { nombre: "Javier Lopez", color: "brown", significado: "Es un perro juguetón y sociable" }
    ];

    const nombresPerros = [
        "Cleo", "Max", "Luna", "Rocky", "Bella",
        "Toby", "Milo", "Daisy", "Simba", "Nala",
        "Bruno", "Lola", "Bobby", "Maggie", "Thor",
        "Rex", "Canela", "Zeus", "Cooper", "Oreo"
    ];

    const imagenesPerros = nombresPerros.map((nombre, index) => ({
        nombre: nombre,
        url: `https://placedog.net/400/400?id=${index + 1}`
    }));

    for (let i = 0; i < 5; i++) {
        const column = document.createElement("div");
        column.classList.add("gallery-column");

        for (let j = 0; j < 4; j++) {
            const index = i * 4 + j;
            if (index >= imagenesPerros.length) break;

            const item = document.createElement("div");
            item.classList.add("gallery-item");

            const img = document.createElement("img");
            img.src = imagenesPerros[index].url;
            img.alt = imagenesPerros[index].nombre;
            item.appendChild(img);

            const paseador = paseadores[index % paseadores.length];
            item.dataset.info = `Paseador: ${paseador.nombre}`;  // Cambié la forma de mostrar el texto
            item.dataset.color = paseador.color;
            item.dataset.significado = paseador.significado;
            item.dataset.dogName = imagenesPerros[index].nombre;

            item.addEventListener("click", function() {
                popupDogName.innerText = this.dataset.dogName;

                // Actualizamos el texto para que se vea más claro y con solo el enlace al nombre
                popupInfo.innerHTML = `Paseador: <a href="../index.html#paseadores" style="font-size: 1.2em; font-weight: bold;">${paseador.nombre}</a>`;

                popupColor.style.backgroundColor = this.dataset.color;
                popupColorText.innerText = this.dataset.significado;
                popupImage.src = img.src;
                popupOverlay.style.display = "block";
                popup.style.display = "block";
            });

            column.appendChild(item);
        }

        gallery.appendChild(column);
    }
});

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup-overlay").style.display = "none";
}
