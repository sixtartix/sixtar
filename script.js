// Liste des mots à afficher
const words = ["arduino", "web dev", "discord bot"];
const dynamicText = document.querySelector(".dynamic-text");

// Configuration de l'animation
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenWords = 1500;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        dynamicText.textContent = currentWord.substring(0, charIndex--);
    } else {
        dynamicText.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, typingSpeed);
    } else {
        setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    }
}

// Lancer l'animation au chargement
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});
