document.getElementById("myImg").src = "grenade.png";

function lancerConfettisDerriereImage() {
  const intervalle = 2000;

  setInterval(() => {
    confetti({
      spread: 360,
      ticks: 200,
      gravity: 1,
      decay: 0.94,
      startVelocity: 30,
      particleCount: 100,
      scalar: 3,
      shapes: ["image"],
      shapeOptions: {
        image: [
          {
            src: "grenade.png",
            width: 32,
            height: 32,
          },
        ],
      },
      // Positionner les confettis derrière l'image sang2.png
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      // Tu peux aussi ajuster la taille de l'image ou d'autres effets
    });
  }, intervalle); // Appelle la fonction toutes les 2 secondes
}

window.onload = function () {
  lancerConfettisDerriereImage();
};

let scrollDirection = 1; // 1 for down, -1 for up

function autoScroll() {
  window.scrollBy(0, scrollDirection * 1);

  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    scrollDirection = -1;
    setTimeout(autoScroll, 2000); // Pause for 2 seconds at the bottom
  } else if (window.pageYOffset === 0) {
    scrollDirection = 1;
    setTimeout(autoScroll, 2000); // Pause for 2 seconds at the top
  } else {
    setTimeout(autoScroll, 10); // Continue scrolling
  }
}

autoScroll();
