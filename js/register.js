// Obtener referencias a los elementos del DOM
const botonAnterior = document.getElementById('bon1');
const botonSiguiente = document.getElementById('bon2');
const botonRegistrarse = document.getElementById('registrarse');
const pag1 = document.querySelector('.pag1');
const pag2 = document.querySelector('.pag2');

// Función para mostrar una página y ocultar la otra
function mostrarPagina(paginaAMostrar) {
  pag1.classList.toggle('inactivo', paginaAMostrar !== 'pag1');
  pag2.classList.toggle('inactivo', paginaAMostrar !== 'pag2');
}

// Eventos de los botones
botonAnterior.addEventListener('click', () => {
  mostrarPagina('pag1');
});

botonSiguiente.addEventListener('click', () => {
  // Aquí puedes agregar validación para la página 1 si es necesario
  // Por ejemplo, verificar que todos los campos requeridos estén llenos
  mostrarPagina('pag2');
});

botonRegistrarse.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Aquí puedes agregar la lógica para enviar los datos del formulario
  // Por ejemplo, usando Fetch API para enviar una solicitud a un servidor
  const formulario = document.querySelector('form');
  const formData = new FormData(formulario);

  fetch('/tu-ruta-api', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log('Respuesta del servidor:', data);
    // Mostrar un mensaje al usuario según la respuesta del servidor
    // Por ejemplo, si el registro fue exitoso, mostrar un mensaje de éxito
  })
  .catch(error => {
    console.error('Error al enviar el formulario:', error);
    // Mostrar un mensaje de error al usuario
  });
});