
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
