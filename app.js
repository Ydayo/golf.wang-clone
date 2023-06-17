const openMenu = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const aside = document.querySelector(".aside");
const body = document.getElementById("body");

openMenu.addEventListener("click", function () {
  aside.classList.add("active");
  body.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  aside.classList.remove("active");
  body.classList.remove("active");
});
