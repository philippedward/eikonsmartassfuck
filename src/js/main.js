"use strict";

console.log(window.innerHeight);

let scrollDirection = 1; // 1 pour descendre, -1 pour monter
let scrolledAmount = 0;
let maxScroll = 594; // Nombre de pixels à défiler avant les pauses (tu peux ajuster ça si nécessaire)
let pauseCount = 0;
let maxPauses = 4;
let pageHeight = document.body.scrollHeight; // Hauteur totale de la page
let pauseAfterPixels = 657; // Taille du défilement (en pixels) après laquelle la pause doit être effectuée

function autoScroll() {
  // Calculer la hauteur de la page à chaque étape
  pageHeight = document.body.scrollHeight;

  // Pause après avoir atteint le nombre de pauses maximum
  if (pauseCount >= maxPauses) {
    pauseCount = 0; // Réinitialiser après les pauses
    scrolledAmount = 0; // Réinitialiser le comptage du scroll
    window.scrollTo(0, 0); // Remonter d'un coup en haut
    setTimeout(autoScroll, 2000); // Pause avant de recommencer à descendre
    return;
  }

  window.scrollBy(0, scrollDirection * 1);
  scrolledAmount += 1;

  // Ajouter la pause après avoir défilé un certain nombre de pixels
  if (scrolledAmount >= pauseAfterPixels) {
    pauseCount++; // Compter la pause
    scrolledAmount = 0; // Réinitialiser le comptage des pixels défilés
    setTimeout(autoScroll, 2000); // Pause de 2 secondes
  } else if (window.innerHeight + window.pageYOffset >= pageHeight) {
    // Atteindre le bas de la page, remonter d'un coup
    scrollDirection = -1;
    window.scrollTo(0, 0); // Remonter immédiatement en haut
    setTimeout(autoScroll, 2000); // Pause de 2 secondes en haut avant de recommencer
  } else {
    setTimeout(autoScroll, 10); // Continuer à défiler
  }
}

autoScroll();
