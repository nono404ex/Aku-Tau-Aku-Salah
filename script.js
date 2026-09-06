const openBtn = document.getElementById("openBtn");
const letter = document.getElementById("letter");
const surpriseBtn = document.getElementById("surpriseBtn");
const reveal = document.getElementById("reveal");
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

function playMusic() {
  bgMusic.volume = 0.35;
  bgMusic.play().then(() => {
    musicBtn.classList.add("playing");
    musicBtn.textContent = "♫";
  }).catch(() => {});
}

openBtn.addEventListener("click", () => {
  letter.classList.remove("hidden");
  playMusic();

  setTimeout(() => {
    letter.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
});

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    playMusic();
  } else {
    bgMusic.pause();
    musicBtn.classList.remove("playing");
  }
});

surpriseBtn.addEventListener("click", () => {
  reveal.classList.remove("hidden");
  surpriseBtn.textContent = "ketahuan deh 😭";
  surpriseBtn.disabled = true;

  reveal.animate(
    [
      { opacity: 0, transform: "translateY(18px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    { duration: 650, easing: "ease-out", fill: "forwards" }
  );
});
