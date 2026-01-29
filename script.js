const text = "𝓗𝓪𝓹𝓹𝔂 𝓑𝓲𝓻𝓽𝓱𝓭𝓪𝔂 🎉"; // fancy letters
let index = 0;
const speed = 200; // typing speed in ms

const typingElement = document.getElementById("typing");
const surpriseBtn = document.getElementById("surpriseBtn");

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    } else {
        // Typing complete → show surprise button after delay
        setTimeout(() => {
            surpriseBtn.style.opacity = 1;
            surpriseBtn.style.pointerEvents = "auto";
        }, 500); // 0.5 sec delay
    }
}

typeEffect();

function playMusic() {
    document.getElementById("bgMusic").play();
}
