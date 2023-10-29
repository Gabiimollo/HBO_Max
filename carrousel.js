    $(document).ready(function () {
        // Encuentra el contenedor del carrusel
        var carouselContainer = document.querySelector('.carrousel__container');

        // Calcula el ancho total de las tarjetas en el carrusel
        var cardWidth = document.querySelector('.carrousel__slide').offsetWidth;
        var cardMargin = 10; // Margen entre tarjetas
        var totalCardWidth = cardWidth + cardMargin;

        // Inicializa una variable para rastrear el índice actual
        var currentIndex = 0;

        // Función para mover el carrusel hacia la derecha
        function moveCarouselRight() {
            currentIndex++;
            if (currentIndex >= 3) {
                currentIndex = 0;
            }
            updateCarouselPosition();
        }

        // Función para mover el carrusel hacia la izquierda
        function moveCarouselLeft() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = 2;
            }
            updateCarouselPosition();
        }

        // Función para actualizar la posición del carrusel
        function updateCarouselPosition() {
            var position = -currentIndex * totalCardWidth;
            carouselContainer.style.transform = 'translateX(' + position + 'px)';
        }

        // Agrega controladores de eventos a los botones de navegación
        document.querySelector('.carousel-control-prev').addEventListener('click', moveCarouselLeft);
        document.querySelector('.carousel-control-next').addEventListener('click', moveCarouselRight);
    });
