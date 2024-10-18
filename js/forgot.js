const botonEnviarCodigo = document.getElementById('enviar'); // Botón en content1
const botonVerificarCodigo = document.getElementById('verifica'); // Botón en content2
const botonCambiarContraseña = document.getElementById('cambiar'); // Botón en content3

const contenido1 = document.querySelector('.content');
const contenido2 = document.querySelector('.content2');
const contenido3 = document.querySelector('.content3');

botonEnviarCodigo.addEventListener('click', () => {
  // Puedes agregar validación de correo electrónico aquí (opcional)
  contenido1.classList.add('inactivo');
  contenido2.classList.remove('inactivo');
});

botonVerificarCodigo.addEventListener('click', () => {
  // Puedes agregar validación de código de verificación aquí (opcional)
  contenido2.classList.add('inactivo');
  contenido3.classList.remove('inactivo');
});

botonCambiarContraseña.addEventListener('click', () => {
  // Puedes agregar lógica para cambiar la contraseña aquí (opcional)
  // Por ejemplo, enviar una solicitud al servidor para actualizar la contraseña
  alert('¡Contraseña cambiada con éxito!');
});
