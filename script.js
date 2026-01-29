// Typing effect
const text = "𝓗𝓪𝓹𝓹𝔂 𝓑𝓲𝓻𝓽𝓱𝓭𝓪𝔂 🎉"; 
let index = 0;
const speed = 200;

const typingElement = document.getElementById("typing");
const surpriseBtn = document.getElementById("surpriseBtn");

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    } else {
        // Typing complete → show Surprise button at center
        setTimeout(() => {
            surpriseBtn.style.opacity = 1;
            surpriseBtn.style.pointerEvents = "auto";
        }, 500);
    }
}

typeEffect();

function playMusic() {
    document.getElementById("bgMusic").play();
}

// Surprise sequence
function startSurprise() {
    surpriseBtn.style.display = "none"; // hide button
    const balloonsContainer = document.getElementById("balloons");
    const cake = document.getElementById("cake");
    const cakeText = document.getElementById("cakeText");

    // Balloons appear sequentially
    for(let i=1; i<=5; i++){
        let balloon = document.createElement("img");
        balloon.src = `balloon${i}.png`;
        balloon.className = "balloon";
        balloon.style.left = `${20*i + Math.random()*50}%`;
        balloonsContainer.appendChild(balloon);
    }

    // Cake appears after balloons float
    setTimeout(() => {
        cake.style.display = "block";
        cakeText.innerText = "Candle jalao 🕯️";
    }, 4500);

    // Change text step by step
    setTimeout(() => { cakeText.innerText = "Phuk maro 💨"; }, 6500);
    setTimeout(() => { cakeText.innerText = "Cake cut ✂️"; }, 8500);
}
