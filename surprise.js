const balloonContainer = document.getElementById("balloonContainer");
const candle = document.getElementById("candle");
const cake = document.getElementById("cake");

let balloonCount = 0;

function showNextBalloon(){
    if(balloonCount < 5){
        const balloon = document.createElement("img");
        balloon.src = `balloon${balloonCount+1}.png`;
        balloon.className = "balloon";
        balloon.style.left = `${10 + balloonCount*15}%`;
        balloonContainer.appendChild(balloon);

        balloon.onclick = () => {
            balloon.style.transform = "translateY(-500px) rotate(360deg)";
            balloon.style.opacity = 0;
            balloonCount++;
            setTimeout(showNextBalloon, 1000);
        }
    } else {
        // 5th balloon clicked, show candle & cake
        setTimeout(()=>{ candle.style.display = "block"; }, 500);
        setTimeout(()=>{ cake.style.display = "block"; }, 2000);
    }
}

// Start first balloon
showNextBalloon();
