window.onload= inicializaEventos;

function inicializaEventos() {
    document.getElementById("enviar").addEventListener("click", saludar,false);
}
        
function saludar() {
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var persona= new Persona(nombre, apellido);
    alert("Hola "+persona.nombre+" "+persona.apellido);
}
class Persona {
    constructor(nombre, apellido) {
      this.nombre = nombre;
      this.apellido = apellido;
    }
  }