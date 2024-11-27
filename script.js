// Función para cambiar las imágenes cada 3 segundos
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide() {
    currentIndex = (currentIndex + 1) % slides.length; 
    const offset = -currentIndex * 100;  // Mueve las imágenes
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

setInterval(changeSlide, 3000);  // Cambia la imagen cada 3 segundos

