// Each letter is already cursive/fancy
const text = "𝓗𝓪𝓹𝓹𝔂 𝓑𝓲𝓻𝓽𝓱𝓭𝓪𝔂 🎉"; 
let index = 0;
const speed = 200; // typing speed in ms

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}

typeEffect();

function playMusic() {
    document.getElementById("bgMusic").play();
}

