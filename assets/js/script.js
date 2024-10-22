document.getElementById("calculate").addEventListener("click", (e) => {
  document.getElementById("install").innerHTML = "";
  document.querySelector("#blur").style.filter = "none";
});

// function active() {
//   var x = document.getElementById("active");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

document.getElementById("activate").addEventListener("click", (e) => {
  document.getElementById("active").classList.toggle("active");
  document.getElementById("activate").classList.toggle("active");
});
