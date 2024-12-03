
/* tendina per mobile*/

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

// Chiudi la tendina se l'utente clicca fuori da essa
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



document.addEventListener("DOMContentLoaded", function () {
    const customCursor = document.getElementById("custom-cursor");

    document.addEventListener("mousemove", function (e) {
        customCursor.style.left = e.pageX + "px";
        customCursor.style.top = e.pageY + "px";
    });
});





    checkScreenSize(); // Controlla le dimensioni al caricamento
    window.addEventListener("resize", checkScreenSize); // Rileva ridimensionamento finestra
});

// Funzione per aprire un programma o una cartella
function openProgram(id) {
    document.getElementById(id).classList.remove('hidden');
}

// Funzione per chiudere un programma o una cartella
function closeProgram(id) {
    document.getElementById(id).classList.add('hidden');
}

// Trascinabilità delle finestre
document.querySelectorAll('.window').forEach(window => {
    const header = window.querySelector('.window-header');
    let isDragging = false, startX, startY;

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX - window.offsetLeft;
        startY = e.clientY - window.offsetTop;
        window.style.zIndex = 1000; // Porta la finestra in primo piano
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            window.style.left = `${e.clientX - startX}px`;
            window.style.top = `${e.clientY - startY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});








document.addEventListener("DOMContentLoaded", function () {
    const mainError = document.getElementById("main-error");
    const errorWindowsContainer = document.getElementById("error-windows-container");

    function generateErrorWindows(count) {
        // Rimuove eventuali finestre precedenti
        errorWindowsContainer.innerHTML = "";

        for (let i = 0; i < count; i++) {
            const errorWindow = document.createElement("div");
            errorWindow.classList.add("error-window");

            // Dimensioni casuali
            const width = Math.floor(Math.random() * 125) + 150; // Larghezza tra 150px e 350px
            const height = Math.floor(Math.random() * 75) + 100; // Altezza tra 100px e 250px

            // Posizione casuale
            const x = Math.floor(Math.random() * (window.innerWidth - width));
            const y = Math.floor(Math.random() * (window.innerHeight - height));

            errorWindow.style.width = `${width}px`;
            errorWindow.style.height = `${height}px`;
            errorWindow.style.top = `${y}px`;
            errorWindow.style.left = `${x}px`;

            // Struttura della finestra
            errorWindow.innerHTML = `
                <div class="header">
                    <span>Errore</span>
                    <div class="controls">
                        <button class="close"></button>
                        <button class="minimize"></button>
                        <button class="resize"></button>
                    </div>
                </div>
                <div class="content">
                    <h1>!ERROR!</h1>
                    <p>Schermo troppo piccolo :( </p>
                </div>
            `;

            // Aggiunge la finestra al contenitore
            errorWindowsContainer.appendChild(errorWindow);
        }
    }

    function checkScreenSize() {
        if (window.innerWidth < 1224) { // Schermo troppo piccolo
            mainError.style.display = "flex";
            generateErrorWindows(100); // Genera 20 finestre
        } else { // Schermo grande
            mainError.style.display = "none";
        }
    }
