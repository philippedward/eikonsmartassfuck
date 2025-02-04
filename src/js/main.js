"use strict";

console.log(window.innerHeight);

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".scroll-pause");
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
      console.log("current index : ", currentIndex);

      var emojis = { 0: "🌈", 1: "🌺", 2: "🍊", 3: "🌱", 4: "🍾" };
      var emoji = emojis[currentIndex];

      setTimeout(() => {
        popConfetti(emoji);
      }, 1000);

      await pause(7000);

      if (scrollingDown) {
        currentIndex++;
        if (currentIndex == sections.length) {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
          scrollingDown = false;
          currentIndex = 0;
        }
      } else {
        if (currentIndex == 0) {
          window.scrollTo({ top: 0, behavior: "smooth" });
          scrollingDown = true;
          currentIndex = 0;
        }
      }
    }
  };
  autoScroll();
});

const all = document.getElementById(".all");
const canvas = document.getElementById(".confetti");

const jsConfetti = new JSConfetti();

function popConfetti(emoji) {
  jsConfetti.addConfetti({
    emojis: [emoji],
    imgSize: 50,
    confettiNumber: 30,
  });
}
