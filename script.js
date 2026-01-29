const text = "HAPPY BIRTHDAY 🎉";
let index = 0;
const speed = 200;

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

