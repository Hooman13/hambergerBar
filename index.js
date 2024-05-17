const hamMenu = document.querySelector("hamberger");
const fullMenu = document.querySelector("fullMenu");
function replaceFunction() {
  hamMenu.classList.replace("sm:hidden", "hidden");
  fullMenu.classList.replace("hidden", "flex");
}
hamMenu.addEventListener("click", replaceFunction);
