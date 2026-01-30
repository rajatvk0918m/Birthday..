let balloons = [
  "balloon1.jpg",
  "balloon2.jpg",
  "balloon3.jpg",
  "balloon4.jpg",
  "balloon5.jpg"
];

let current = 0;

function showNextBalloon(){
  if(current < balloons.length){
    let img = document.createElement("img");
    img.src = balloons[current];
    img.className = "balloon";
    img.style.left = (10 + current * 15) + "%";

    img.onclick = function(){
      img.style.transform = "translateY(-700px)";
      current++;
      setTimeout(showNextBalloon, 500);
    };

    document.body.appendChild(img);
  }else{
    document.getElementById("cake").style.display = "block";
  }
}

showNextBalloon();
