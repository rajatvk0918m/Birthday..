let balloons = [
  "balloon1.png",
  "balloon2.png",
  "balloon3.png",
  "balloon4.png",
  "balloon5.png"
];

let i = 0;

function nextBalloon(){
  if(i < balloons.length){
    let b = document.createElement("img");
    b.src = balloons[i];
    b.className = "balloon";
    b.style.left = (10 + i*15) + "%";

    b.onclick = () => {
      b.style.transform = "translateY(-700px)";
      i++;
      setTimeout(nextBalloon,500);
    };

    document.body.appendChild(b);
  }else{
    document.getElementById("cake").style.display = "block";
  }
}

nextBalloon();

