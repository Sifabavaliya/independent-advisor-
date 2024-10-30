document.getElementById("calculate").addEventListener("click", (e) => {
  document.getElementById("install").classList.add("hide");
  document.getElementById("blur").classList.remove("blur-effect");
  document.getElementById("activate").classList.add("show");
  document.getElementById("display-compare-section").classList.add("show");
});

document.getElementById("activate").addEventListener("click", (e) => {
  document.getElementById("active").classList.toggle("active");
  document.getElementById("activate").classList.toggle("active");
  document.getElementById("actives").classList.toggle("active");
});
