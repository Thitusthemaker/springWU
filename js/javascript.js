var menubutton = document.querySelector("#menu-button").addEventListener("click",toggleMenu)


function toggleMenu(){
    let menu = document.querySelector("#menu")
    menu.classList.toggle("show")
}
