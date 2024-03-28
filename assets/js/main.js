// Carousel Initialization
const myCarouselElement = document.querySelector('#myCarousel');

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 5000,
  touch: false
});

// Tooltip Initialization
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


$(function(){
    var div = $('#myCarousel');

    //jQuery rellenar navbar transparente al hacer scrolldown fuera del carousel 
    $(window).scroll(function() {
        if ($(this).scrollTop() > parseInt(div.css("height").split(".")[0])) { // Obtener altura del carousel, y fijar como punto de quiebre para cambiar relleno navbar
            $('.navbar').removeClass('mt-2');                                  // Quitar margen superior
            $('nav .container').addClass('bg-info');                           // Rellenar contenedor interno con "bg-color deseado"
            $('.navbar').addClass('bg-info');                                  // Rellenar contenedor externo con "bg-color deseado"
        } else {
            $('.navbar').addClass('mt-2');                                     // Agregar margen superior
            $('nav .container').removeClass('bg-info');                        // Limpiar relleno contenedor interno
            $('.navbar').removeClass('bg-info');                               // Limpiar relleno contenedor externo
        }
    });
});