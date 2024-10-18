const botonEnviarCodigo = document.querySelector('.boton'); // Botón de la página 1
const botonVerificarCodigo = document.querySelector('.boton.content2'); // Botón de la página 2 (Asegúrate que esta clase sea correcta)

const contenido1 = document.querySelector('.content');
const contenido2 = document.querySelector('.content2');
const contenido3 = document.querySelector('.content3');

// Al hacer clic en "Enviar código", ocultar contenido1 y mostrar contenido2
botonEnviarCodigo.addEventListener('click', () => {
  contenido1.style.display = 'none';
  contenido2.style.display = 'block';
});

// Al hacer clic en "Verificar código", ocultar contenido2 y mostrar contenido3
botonVerificarCodigo.addEventListener('click', () => {
  contenido2.style.display = 'none';
  contenido3.style.display = 'block';
  console.log('Se ha mostrado el contenido 3'); // Verifica si se ejecuta
});