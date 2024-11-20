// Función de Login
function validarLogin() {
  const usuario = document.getElementById('usuario').value;
  const contraseña = document.getElementById('contraseña').value;

  // Comprobación de usuario y contraseña
  if (usuario === 'alumno' && contraseña === '2024') {
    window.location.href = 'curso.html'; // Redirige al contenido del curso
    return false; // Evitar el envío del formulario
  } else {
    // Mostrar mensaje de error si las credenciales son incorrectas
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'block'; // Mostrar el mensaje de error
    return false;
  }
}

// Función de calificación
function calificar() {
  let score = 0;

  // Respuestas correctas
  // Pregunta 1
  if (document.querySelector('input[name="pregunta1"]:checked')?.value === 'b') {
    score++;
  }

  // Pregunta 2
  if (document.querySelector('input[name="pregunta2"]:checked')?.value === 'b') {
    score++;
  }

  // Pregunta 3 (comprobar si se seleccionaron todos los checkboxes correctos)
  const checkboxes = document.querySelectorAll('input[name="pregunta3"]:checked');
  const checkboxesValues = Array.from(checkboxes).map(checkbox => checkbox.value);
  if (checkboxesValues.includes('html') && checkboxesValues.includes('css') && checkboxesValues.includes('js')) {
    score++;
  }

  // Pregunta 4
  if (document.querySelector('select[name="pregunta4"]').value === 'a') {
    score++;
  }

  // Pregunta 5 (comprobar si la respuesta contiene "diseño")
  if (document.querySelector('textarea[name="pregunta5"]').value.toLowerCase().includes('diseño')) {
    score++;
  }

  // Mostrar el resultado
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<p>Tu calificación es: ${score}/5</p>`;

  // Evitar el envío del formulario
  return false;
}
