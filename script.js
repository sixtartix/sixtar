document.addEventListener('DOMContentLoaded', (event) => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Fonction pour créer les étoiles
    function createStars() {
        const starsContainer = document.getElementById('stars');
        const numberOfStars = 100;

        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Taille aléatoire entre 1 et 3 pixels
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            
            // Position aléatoire
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            // Couleur aléatoire (blanc, bleu clair ou jaune clair)
            const colors = ['#ffffff', '#add8e6', '#fffacd'];
            star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Animation
            star.style.animationDuration = `${Math.random() * 3 + 2}s`;
            star.style.animationDelay = `${Math.random() * 2}s`;
            
            starsContainer.appendChild(star);
        }
    }

    createStars();
});

// Effet de parallaxe simple
window.addEventListener('scroll', () => {
    const stars = document.querySelectorAll('.star');
    const scrollPosition = window.pageYOffset;

    stars.forEach(star => {
        const speed = Math.random() * 0.5;
        const yPos = -(scrollPosition * speed);
        star.style.transform = `translateY(${yPos}px)`;
    });
});
