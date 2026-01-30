let options = document.getElementById("options");

// Delay 0.5s for small animation feel
setTimeout(()=>{ options.style.display = "block"; }, 500);

function goCelebrate(){
  window.location.href = "celebrate.html";
}

function goRecap(){
  alert("Recap page coming soon!");
}
