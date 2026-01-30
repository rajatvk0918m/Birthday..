let balloons = [
  "balloon1.jpg",
  "balloon2.jpg",
  "balloon3.jpg",
  "balloon4.jpg",
  "balloon5.jpg"
];

let index = 0;

function showBalloon(){
  if(index < balloons.length){
    let img = document.createElement("img");
    img.src = balloons[index];
    img.className = "balloon";
    img.style.left = (10 + index*15) + "%";

    img.onclick = function(){
      img.style.transform = "translateY(-600px)";
      index++;
      setTimeout(showBalloon,400);
    };

    document.body.appendChild(img);
  }else{
    document.getElementById("msg").style.display = "block";
  }
}

showBalloon();
