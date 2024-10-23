// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Obtener los elementos del DOM
  const nextButton = document.getElementById("next-button");
  const previousButton = document.getElementById("ante-button");
  const page1 = document.querySelector(".input-group");
  const page2 = document.querySelector(".pag2");

  // Función para avanzar a la segunda página
  nextButton.addEventListener("click", () => {
      page1.classList.add("inactivo"); // Oculta la primera página
      page2.classList.remove("inactivo"); // Muestra la segunda página
  });

  // Función para regresar a la primera página
  previousButton.addEventListener("click", () => {
      page2.classList.add("inactivo"); // Oculta la segunda página
      page1.classList.remove("inactivo"); // Muestra la primera página
  });
});
