document.addEventListener('DOMContentLoaded', function() {
    // Carrusel principal
    const mainCarousel = document.querySelector('.carousel-container');
    const mainCarouselImages = document.querySelectorAll('.carousel-image');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentMainSlide = 0;

    function showMainSlide(index) {
        mainCarousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextMainSlide() {
        currentMainSlide = (currentMainSlide + 1) % mainCarouselImages.length;
        showMainSlide(currentMainSlide);
    }

    function prevMainSlide() {
        currentMainSlide = (currentMainSlide - 1 + mainCarouselImages.length) % mainCarouselImages.length;
        showMainSlide(currentMainSlide);
    }

    prevButton.addEventListener('click', prevMainSlide);
    nextButton.addEventListener('click', nextMainSlide);

    // Cambio automático del carrusel principal
    setInterval(nextMainSlide, 5000);

    // Carrusel de promociones
    const promotionsCarousel = document.querySelector('.promotions-carousel');
    const promotionItems = document.querySelectorAll('.promotion-item');
    let currentPromotion = 0;

    function showPromotion(index) {
        promotionsCarousel.scrollTo({
            left: index * (promotionItems[0].offsetWidth + 20),
            behavior: 'smooth'
        });
    }

    function nextPromotion() {
        currentPromotion = (currentPromotion + 1) % promotionItems.length;
        showPromotion(currentPromotion);
    }

    // Cambio automático del carrusel de promociones
    setInterval(nextPromotion, 3000);

    // Menú desplegable en dispositivos móviles
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropbtn');
        const content = dropdown.querySelector('.dropdown-content');

        button.addEventListener('click', (e) => {
            e.preventDefault();
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});