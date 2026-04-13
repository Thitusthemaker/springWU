var menubutton = document.querySelector("#menu-button").addEventListener("click",toggleMenu)
var closebutton = document.querySelector("#close-menu").addEventListener("click",toggleMenu)

var starslider = document.getElementById("starsSlider")
const stars = document.getElementById("stars")

var minPriceSlider = document.getElementById("minPriceSlider")
const minPrice = document.getElementById("minPrice")

function toggleMenu(){
    let menu = document.querySelector("#menu")
    menu.classList.toggle("show")
}

starslider.oninput = function(){
    stars.textContent = 'Minimum stars: ' + this.value
}

minPriceSlider.oninput = function(){
    minPrice.textContent = 'Minium price: ' + this.value + 'kr'
}