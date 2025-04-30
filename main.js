// Esta función se ejecuta automáticamente cuando toda la página (HTML, imágenes, etc.) ha terminado de cargar
window.onload = function() {
  // Muestra una ventana emergente de bienvenida
  alert("¡Bienvenido a esta página para Rememorar el Día del Libro!");

  // Configurar botón para mostrar u ocultar tabla
  function mostrarTabla() {
    var tabla = document.getElementById("tablaOculta");
    var boton = document.getElementById("boton");

    if (tabla.style.display === "none") {
      tabla.style.display = "block";
      boton.textContent = "Menos Información";
    } else {
      tabla.style.display = "none";
      boton.textContent = "Más Información";
    }
  }

  // Hacer que la función esté disponible globalmente (opcional)
  window.mostrarTabla = mostrarTabla;

  // Validación de formulario de contacto
  const formulario = document.getElementById("formContacto");

  formulario.addEventListener("submit", function(event) {
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();

    if (nombre === "") {
      alert("Por favor, ingresa tu nombre.");
      event.preventDefault();
      return;
    }

    if (!validarCorreo(correo)) {
      alert("Por favor, ingresa un correo válido.");
      event.preventDefault();
      return;
    }

    alert("Formulario enviado correctamente.");
  });

  // Función para validar formato de correo electrónico
  function validarCorreo(correo) {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(correo);
  }

  // Cambiar color de fondo con eventos del botón
  const botonFondo = document.getElementById("cambiarFondo");

  if (botonFondo) {
    botonFondo.addEventListener("click", function() {
      document.body.style.backgroundColor = "#f0e68c";
    });

    botonFondo.addEventListener("mouseover", function() {
      document.body.style.backgroundColor = "#add8e6";
    });

    botonFondo.addEventListener("mouseout", function() {
      document.body.style.backgroundColor = "white";
    });
  }
};