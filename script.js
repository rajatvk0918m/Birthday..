const text = "𝓗𝓪𝓹𝓹𝔂 𝓑𝓲𝓻𝓽𝓱𝓭𝓪𝔂 🎉"; 
let index = 0;
const speed = 200; // typing speed

const typingElement = document.getElementById("typing");
const surpriseBtn = document.getElementById("surpriseBtn");

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    } else {
        // Typing complete → move Happy Birthday to top-left corner
        typingElement.style.top = "20px";
        typingElement.style.left = "20px";
        typingElement.style.transform = "translate(0,0)";
        typingElement.style.fontSize = "50px"; // thoda chota corner me

        // Show Surprise button at center after delay
        setTimeout(() => {
            surpriseBtn.style.opacity = 1;
            surpriseBtn.style.pointerEvents = "auto";
        }, 800); // 0.8 sec delay
    }
}

typeEffect();

function playMusic() {
    document.getElementById("bgMusic").play();
}
