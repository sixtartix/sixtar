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

easterEgg.addEventListener("click", function () {
    console.log("Etoile cliquée !");

    // Créer deux éléments span pour l'effet ripple
    const ripple1 = document.createElement('span');
    ripple1.classList.add('ripple-effect');
    
    const ripple2 = document.createElement('span');
    ripple2.classList.add('ripple-effect');

    // Récupérer la taille de la fenêtre
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculer les positions pour que les ripples partent du bas-centre
    const rippleCenterX = windowWidth / 2; // Centre horizontal de la page
    const rippleCenterY = windowHeight; // Bas de la page

    // Positionner les ripples
    // Ripple 1 - Bas-centre légèrement à gauche
    ripple1.style.left = `${rippleCenterX - 60}px`; // Décalage à gauche (ajustable)
    ripple1.style.top = `${rippleCenterY - 100}px`; // Légèrement au-dessus du bord bas

    // Ripple 2 - Bas-centre légèrement à droite
    ripple2.style.left = `${rippleCenterX + 60}px`; // Décalage à droite (ajustable)
    ripple2.style.top = `${rippleCenterY - 100}px`; // Légèrement au-dessus du bord bas

    // Ajouter les deux ripples au document
    document.body.appendChild(ripple1);
    document.body.appendChild(ripple2);

    // Supprimer les éléments ripple après l'animation
    setTimeout(() => {
        ripple1.remove();
        ripple2.remove();
    }, 1000); // Durée de l'animation (1 seconde)
});

