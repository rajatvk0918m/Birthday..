const text = "𝓗𝓪𝓹𝓹𝔂 𝓑𝓲𝓻𝓽𝓱𝓭𝓪𝔂 🎉";
let index = 0;
const speed = 200;

const typingElement = document.getElementById("typing");
const surpriseBtn = document.getElementById("surpriseBtn");

function typeEffect() {
    if(index < text.length){
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    } else {
        // show surprise button after typing
        setTimeout(() => {
            surpriseBtn.style.opacity = 1;
            surpriseBtn.style.pointerEvents = "auto";
        }, 500);
    }
}
typeEffect();

function goToSurprise() {
    document.getElementById("bgMusic").play();
    window.location.href = "surprise.html";
}
