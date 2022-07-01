function switchClass() {
  this.classList.toggle("is-active");
  document.querySelector("body").classList.toggle("nav-active");
}

document.querySelector(".header-nav-icon").addEventListener("click", switchClass);

