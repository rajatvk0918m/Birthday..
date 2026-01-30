let v = document.getElementById("vid");
let opt = document.getElementById("options");

v.onended = () => {
  v.style.display = "none";
  opt.style.display = "block";
};

function goCelebrate(){
  window.location.href = "celebrate.html";
}
