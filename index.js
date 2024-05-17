const hamMenu = document.querySelector("hamburger");
const fullMenu = document.querySelector("fullMenu");
function replaceFunction() {
  hamMenu.classList.replace("sm:hidden", "hidden");
  fullMenu.classList.replace("hidden", "flex");
}
hamMenu.addEventListener("click", replaceFunction);
