// Effet machine à écrire
const texts = ["Arduino", "Web-Développeur", "Discord-bot", "Python"];
const dynamicText = document.querySelector(".dynamic-text");
let currentTextIndex = 0;
let currentCharIndex = 0;
let typing = true;

function typeEffect() {
    if (typing) {
        if (currentCharIndex < texts[currentTextIndex].length) {
            dynamicText.textContent += texts[currentTextIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(typeEffect, 150);
        } else {
            typing = false;
            setTimeout(typeEffect, 1000); // Pause à la fin du mot
        }
    } else {
        if (currentCharIndex > 0) {
            dynamicText.textContent = texts[currentTextIndex].substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(typeEffect, 50);
        } else {
            typing = true;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            setTimeout(typeEffect, 500); // Pause avant le mot suivant
        }
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Effet Ripple
const easterEgg = document.querySelector(".easter-egg");

easterEgg.addEventListener("click", function (event) {
    console.log("Etoile cliquée !");

    // Créer deux éléments span pour l'effet ripple
    const ripple1 = document.createElement('span');
    ripple1.classList.add('ripple-effect');
    
    const ripple2 = document.createElement('span');
    ripple2.classList.add('ripple-effect');

    // Récupérer la position de l'étoile
    const easterEggRect = easterEgg.getBoundingClientRect();

    // Positionner le ripple1 en bas à gauche
    ripple1.style.left = `${easterEggRect.left - ripple1.offsetWidth / 2}px`; // À gauche
    ripple1.style.top = `${easterEggRect.top + easterEggRect.height - ripple1.offsetHeight / 2}px`; // En bas

    // Positionner le ripple2 en bas à droite
    ripple2.style.left = `${easterEggRect.left + easterEggRect.width - ripple2.offsetWidth / 2}px`; // À droite
    ripple2.style.top = `${easterEggRect.top + easterEggRect.height - ripple2.offsetHeight / 2}px`; // En bas

    // Ajouter les deux ripples à l'étoile
    easterEgg.appendChild(ripple1);
    easterEgg.appendChild(ripple2);

    // Supprimer les éléments ripple après l'animation
    setTimeout(() => {
        ripple1.remove();
        ripple2.remove();
    }, 1000); // Durée de l'animation (1 seconde)
});
