const balloonContainer = document.getElementById("balloonContainer");
const candle = document.getElementById("candle");
const cake = document.getElementById("cake");

let balloonCount = 0;

function showNextBalloon() {
    if(balloonCount < 5){
        const balloon = document.createElement("img");
        balloon.src = `balloon${balloonCount+1}.png`;
        balloon.className = "balloon";
        balloon.style.width = "60px";
        balloon.style.position = "absolute";
        balloon.style.bottom = "0px";
        balloon.style.left = `${20 + balloonCount*15}%`;
        balloon.style.cursor = "pointer";

        balloon.onclick = () => {
            balloon.style.transition = "all 1s ease";
            balloon.style.transform = "translateY(-500px) rotate(360deg)";
            balloon.style.opacity = 0;
            balloonCount++;
            setTimeout(showNextBalloon, 1000); // next balloon after 1s
        }

        balloonContainer.appendChild(balloon);
    } else {
        // All balloons clicked, show candle
        setTimeout(() => { candle.style.display = "block"; }, 500);
        // Then cake
        setTimeout(() => { cake.style.display = "block"; }, 2000);
    }
}

// Start first balloon
showNextBalloon();

