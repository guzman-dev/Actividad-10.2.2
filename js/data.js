let data = document.getElementById("data");

document.addEventListener("DOMContentLoaded", mostrarTexto);

function mostrarTexto(){
    data.innerHTML = localStorage.getItem("texto");
}