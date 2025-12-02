var nombre = document.getElementById("Nombre");
var apellido = document.getElementById("ocupacion");

var esMasculino = true

perfilCard.addEventListener("click", function() {
  if (esMasculino) {
    nombre.textContent = "Omar";
    ocupacion.textContent = "Estudiante Universitario y jugador de basketball";
  } else {
    nombre.textContent = "Omarcita";
    ocupacion.textContent = "Estudiante Universitaria y jugadora de basketball";
  }
});

