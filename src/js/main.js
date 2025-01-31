"use strict";

console.log(window.innerHeight);

let scrollDirection = 1; // 1 pour descendre, -1 pour monter
let scrolledAmount = 0;
let maxScroll = 594; // Nombre de pixels à défiler avant les pauses
let pauseCount = 0;
let maxPauses = 3;

function autoScroll() {
  if (pauseCount >= maxPauses) {
    pauseCount = 0; // Réinitialiser après les pauses
    scrolledAmount = 0; // Réinitialiser le comptage du scroll
    window.scrollTo(0, 0); // Remonter d'un coup en haut
    setTimeout(autoScroll, 1000); // Pause avant de recommencer à descendre
    return;
  }

  window.scrollBy(0, scrollDirection * 1);
  scrolledAmount += 1;

  if (scrolledAmount >= maxScroll) {
    pauseCount++;
    scrolledAmount = 0;
    setTimeout(autoScroll, 2000); // Pause de 2 secondes
  } else if (
    window.innerHeight + window.pageYOffset >=
    document.body.offsetHeight
  ) {
    // Atteindre le bas de la page, remonter d'un coup
    scrollDirection = -1;
    window.scrollTo(0, 0); // Remonter immédiatement en haut
    setTimeout(autoScroll, 2000); // Pause de 2 secondes en haut avant de recommencer
  } else {
    setTimeout(autoScroll, 10); // Continuer à défiler
  }
}

autoScroll();
