"use strict";

console.log(window.innerHeight);

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".all");
  let currentIndex = 0;
  let scrollingDown = true;

  const scrollToSection = (index) => {
    sections[index].scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const pause = (duration) => {
    return new Promise((resolve) => setTimeout(resolve, duration));
  };

  const autoScroll = async () => {
    while (true) {
      scrollToSection(currentIndex);
      await pause(4000); // Pause de 4 secondes pour chaque section

      if (scrollingDown) {
        currentIndex++;
        if (currentIndex >= sections.length) {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
          await pause(2000); // Pause de 2 secondes en bas de la page
          scrollingDown = false;
          currentIndex = sections.length - 1;
        }
      } else {
        currentIndex--;
        if (currentIndex < 0) {
          window.scrollTo({ top: 0, behavior: "smooth" });
          await pause(2000); // Pause de 2 secondes en haut de la page
          scrollingDown = true;
          currentIndex = 0;
        }
      }
    }
  };

  autoScroll();
});

if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  window.scrollTo({ top: 0, behavior: "auto" }); // Remonte instantanément
}
