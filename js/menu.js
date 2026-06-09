document.querySelector("#menu-div").addEventListener("click",toggleMenu)
document.querySelector("#close-menu").addEventListener("click",toggleMenu)
document.querySelector("#fade-layer").addEventListener("click",toggleMenu)
// var closebutton = document.querySelector("#close-menu").addEventListener("click",toggleMenu)

function toggleMenu(){

  let menu = document.getElementById("menu")
  let fade = document.getElementById("fade-layer")
  menu.classList.toggle("show")
  fade.classList.toggle("show")
}