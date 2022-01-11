window.onload= inicializaEventos;

function inicializaEventos() {
    document.getElementById("enviar").addEventListener("click", saludar,false);
}
        
function saludar() {
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    alert("Hola "+nombre+" "+apellido);
}