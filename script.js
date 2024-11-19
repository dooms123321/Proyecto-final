//login
function validarLogin() {
  const usuario = document.getElementById('usuario').value;
  const contraseña = document.getElementById('contraseña').value;

  if (usuario === 'alumno' && contraseña === '2024') {
    window.location.href = 'curso.html'; // Redirigir al contenido del curso
    return false; // Evitar que el formulario se envíe
  } else {
    document.getElementById('error-message').style.display = 'block';
    return false;
  }
}

//calificar
function calificar() {
  let score = 0;

  // Respuestas correctas
  if (document.querySelector('input[name="pregunta1"]:checked')?.value === 'b') {
    score++;
  }
  if (document.querySelector('input[name="pregunta2"]:checked')?.value === 'b') {
    score++;
  }
  if (
    document.querySelector('input[name="pregunta3"]:checked')?.value.includes('html') &&
    document.querySelector('input[name="pregunta3"]:checked')?.value.includes('css') &&
    document.querySelector('input[name="pregunta3"]:checked')?.value.includes('js')
  ) {
    score++;
  }
  if (document.querySelector('select[name="pregunta4"]').value === 'a') {
    score++;
  }
  if (document.querySelector('textarea[name="pregunta5"]').value.toLowerCase().includes('diseño')) {
    score++;
  }

  // Mostrar el resultado
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<p>Tu calificación es: ${score}/5</p>`;

  // Evitar que el formulario se envíe
  return false;
}
