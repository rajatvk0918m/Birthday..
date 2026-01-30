let text = "𝓗𝓪𝓹𝓹𝔂 𝓑𝓲𝓻𝓽𝓱𝓭𝓪𝔂";
let i = 0;
let typing = document.getElementById("typing");
let btn = document.getElementById("surpriseBtn");

function typeEffect(){
  if(i < text.length){
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect,150);
  }else{
    btn.style.display = "block";
  }
}

typeEffect();

btn.onclick = function(){
  window.location.href = "surprise.html";
};
