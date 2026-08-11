document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto de fondo oscuro en la barra de navegación al hacer scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Funcionalidad del Menú Móvil (Hamburguesa)
    const burger = document.getElementById('burger-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Alternar la clase nav-active
        nav.classList.toggle('nav-active');

        // Animación de las líneas de la hamburguesa
        burger.classList.toggle('toggle');
    });

    // Cerrar el menú móvil al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(nav.classList.contains('nav-active')){
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });

    // 3. Efecto Fade-In simple al cargar la página
    const fadeElements = document.querySelectorAll('.fade-in');
    
    fadeElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300 * (index + 1)); // Retraso escalonado para cada elemento
    });
});