const botonEnviarCodigo = document.querySelector('.boton'); // Button in content1
const botonVerificarCodigo = document.querySelector('.boton.content2'); // Button in content2 (ensure this selector is correct)

const contenido1 = document.querySelector('.content');
const contenido2 = document.querySelector('.content2');
const contenido3 = document.querySelector('.content3');

botonEnviarCodigo.addEventListener('click', () => {
  contenido1.style.display = 'none';
  contenido2.style.display = 'block';
});

botonVerificarCodigo.addEventListener('click', () => {
  contenido2.style.display = 'none';
  contenido3.style.display = 'block';
  console.log('Se ha mostrado el contenido 3'); // Add this line for verification
});
