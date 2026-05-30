var starslider = document.getElementById("starsSlider")
const stars = document.getElementById("stars")

var minPriceSlider = document.getElementById("minPriceSlider")
const minPrice = document.getElementById("minPrice")

var maxPriceSlider = document.getElementById("maxPriceSlider")
const maxPrice = document.getElementById("maxPrice")

var maxWidthSlider = document.getElementById("maxWidthSlider")
const maxWidth = document.getElementById("maxWidth")

var maxLengthSlider = document.getElementById("maxLengthSlider")
const maxLength = document.getElementById("maxLength")

var clearAll = document.getElementById("clearFilters").addEventListener("click",clearFilters)


let products = [
    {
        id:0,
        name:"Vattenpass",
        price:999,
        list1:"Useful",
        list2:"Accurate",
        list3:"Does the job",
        stars:4,
        ratings:6,
        author: `<a class="" href="https://commons.wikimedia.org/wiki/File:Vpass-1.JPG">Svjo</a>`,
        src:"img/vattenpass/vpass-1.JPG"
    },
    {
        id:1,
        name:"Vattenpass",
        price:499,
        list1:"Simple",
        list2:"Compact",
        list3:"Always with you",
        stars:4,
        ratings:9,
        author: `<a class="" href="https://pixabay.com/photos/spirit-level-tool-red-cord-balance-280810/">Walter Bichler</a>`,
        src:"img/vattenpass/vpass-2.JPG"
    },
    {
        id:2,
        name:"Vattenpass",
        price:80,
        list1:"Cheap",
        list2:"Simple",
        list3:"Compact",
        stars:1,
        ratings:1,
        author: `<a class="" href="https://pixabay.com/photos/spirit-level-tool-red-cord-balance-280811/">Walter Bichler</a>`,
        src:"img/vattenpass/vpass-3.JPG"
    },
    {
        id:3,
        name:"Vattenpass",
        price:356,
        list1:"Large",
        list2:"Can store fish",
        list3:"Fish not included",
        stars:2,
        ratings:64,
        author: `<a class="" href="https://pixabay.com/photos/craft-spirit-level-miniature-figures-3838891/">Wilfried Pohnke</a>`,
        src:"img/vattenpass/vpass-4.JPG"
    },
    {
        id:4,
        name:"Vattenpass",
        price:457,
        list1:"Great choice",
        list2:"Useful",
        list3:"Reliable",
        stars:3,
        ratings:76,
        author: `<a class="" href="https://www.pexels.com/photo/bearded-man-holding-a-yellow-spirit-level-8482816/">Thirdman</a>`,
        src:"img/vattenpass/vpass-5.JPG"
    },
    {
        id:5,
        name:"Vattenpass",
        price:9999,
        list1:"Overkill",
        list2:"Lasts you a life time",
        list3:"Never fails",
        stars:5,
        ratings:67,
        author: `<a class="" href="https://www.pexels.com/photo/person-holding-a-spirit-level-8488008/">Kindel Media</a>`,
        src:"img/vattenpass/vpass-6.JPG"
    },
    {
        id:6,
        name:"Vattenpass",
        price:234,
        list1:"Measures angle",
        list2:"Blends in",
        list3:"Simple",
        stars:2,
        ratings:8,
        author: `<a class="" href="https://www.pexels.com/photo/an-engineer-holding-a-spirit-level-against-a-wall-8482824/">Thirdman</a>`,
        src:"img/vattenpass/vpass-7.JPG"
    },
    {
        id:7,
        name:"Vattenpass",
        price:5634,
        list1:"Reliable",
        list2:"Always handy",
        list3:"Durable",
        stars:4,
        ratings:93,
        author: `<a class="" href="https://unsplash.com/photos/white-spirit-level-on-brown-table-_qpY2jqedwU">Louis Hansel</a>`,
        src:"img/vattenpass/vpass-8.JPG"
    }
]

function createProducts(item){
    
        let mn = document.getElementById("main")
        
        let id = item.id
        let name = item.name
        let price = item.price
        let src = item.src
        let author = item.author
        let stars = item.stars
        let thing1 = item.list1
        let thing2 = item.list2
        let thing3 = item.list3
        let ratings = item.ratings

        let product = document.createElement("article")
        product.classList.add("product")
        let stringOfStars = ``
        
        for (let i = 0; i < stars; i++){
            stringOfStars += `<img class="fullstar" src="img/star.png">`

        }
        product.innerHTML = ` 
        <img class="display" src="${src}" alt="A picture of a spirit level">
        <h6 class="credit">Author ${author}</h6>
        <h1 class="prname">${name}</h1>
        <div class="stars" alt="${stars} out of 5"></img>
          ${stringOfStars}
          <h6 class="ratings">(${ratings})</h6>
        </div>
      
      <li class="">
        <ul><img class="listarrow" src="img/listarrow.png" alt="List 1">${thing1}</ul>
        <ul><img class="listarrow" src="img/listarrow.png" alt="List 2">${thing2}</ul>
        <ul><img class="listarrow" src="img/listarrow.png" alt="List 3">${thing3}</ul>
      </li>
      <h2 class="price">${price}.-</h2>
      <div class="addToCart" data-id="${id}">
        <img class="addcart" src="img/addcartbutton.png" alt="Add to cart">
      </div>
       `
       mn.appendChild(product);
    }

    

for (let i = 0; i < products.length; i++){
    item = products[i]
    createProducts(item)
}

function updateStarsText() {
  stars.textContent = "Minimum stars: " + starslider.value
}

function updateMinPriceText() {
  minPrice.textContent = "Minimum price: " + minPriceSlider.value + "kr"
}

function updateMaxPriceText() {
  maxPrice.textContent = "Maximum price: " + maxPriceSlider.value + "kr"
}

function updateMaxWidthText() {
  maxWidth.textContent = "Maximum Width: " + maxWidthSlider.value + "m"
}

function updateMaxLengthText() {
  maxLength.textContent = "Maximum length: " + maxLengthSlider.value + "m"
}

starslider.oninput = updateStarsText
minPriceSlider.oninput = updateMinPriceText
maxPriceSlider.oninput = updateMaxPriceText
maxWidthSlider.oninput = updateMaxWidthText
maxLengthSlider.oninput = updateMaxLengthText

function clearFilters() {
  starslider.value = 0
  minPriceSlider.value = 0
  maxPriceSlider.value = 10000
  maxWidthSlider.value = 100
  maxLengthSlider.value = 100

  updateStarsText()
  updateMinPriceText()
  updateMaxPriceText()
  updateMaxWidthText()
  updateMaxLengthText()
}

function getCookies() {
  let decodedCookie = document.cookie

  let inCart = decodedCookie.split('inCart=')[1]
  let items =""
  if(inCart != undefined){
    items = inCart.split(":")
    
  }
  let sortedItems = []
  for (let i = 0; i < items.length; i++){
    if (items[i] != "undefined"){
        sortedItems.push(items[i])
    }
  }

  return sortedItems
  
}

function saveCookie(id) {
    items = getCookies()
    previusCarts = "inCart="
    for (let i = 0; i < items.length;i++){
        previusCarts += items[i] + ":"
    }
    
    document.cookie = previusCarts + id
    
    
}


var addcarts = document.getElementsByClassName("addToCart")


for (let i = 0; i < addcarts.length; i++){
    addcarts[i].addEventListener("click",addcart)
}

function addcart(event){
    let id = event.currentTarget.dataset.id
    saveCookie(id)
    
}

