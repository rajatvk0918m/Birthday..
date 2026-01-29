const balloonContainer = document.getElementById("balloonContainer");
const candle = document.getElementById("candle");
const cake = document.getElementById("cake");

let balloonCount = 0;

function showNextBalloon(){
    if(balloonCount < 5){
        const balloon = document.createElement("div");
        balloon.style.width = "60px";
        balloon.style.height = "80px";
        balloon.style.background = "blue";
        balloon.style.borderRadius = "30px";
        balloon.style.position = "absolute";
        balloon.style.bottom = "0px";
        balloon.style.left = `${10 + balloonCount*15}%`;
        balloon.style.cursor = "pointer";
        balloon.style.transition = "all 1s ease";

        balloon.onclick = () => {
            balloon.style.transform = "translateY(-500px) rotate(360deg)";
            balloon.style.opacity = 0;
            balloonCount++;
            setTimeout(showNextBalloon, 1000);
        }

        balloonContainer.appendChild(balloon);
    } else {
        setTimeout(()=>{ candle.style.display="block"; }, 500);
        setTimeout(()=>{ cake.style.display="block"; }, 2000);
    }
}

showNextBalloon();
