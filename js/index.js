let inputText = document.getElementById("inputText");
let button = document.getElementById("buttonText");

button.addEventListener("click", guardarTexto);

function guardarTexto(){
    localStorage.setItem("texto", inputText.value);
    inputText.value = "";
}