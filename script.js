document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("themeBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
