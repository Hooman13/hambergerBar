const hamMenu = document.querySelector("#hamburger");
const fullMenu = document.querySelector("#mobileSize");
function replaceFunction() {
  hamMenu.classList.replace("sm:hidden", "hidden");
  fullMenu.classList.replace("hidden", "sm:hidden");
}
hamMenu.addEventListener("click", replaceFunction);
