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

function getCookies() {
  let decodedCookie = document.cookie

  let inCart = decodedCookie.split('inCart=')[1]
  let items =""
  if(inCart != undefined){
    items = inCart.split(":")
    
  }

  return items
  
}
function rmCookie(id) {
    rmId = id
    items = getCookies()
    modifiedItems = []
    for(let i = 0; i<items.length;i++){
        item = items[i]
        if (item != rmId){
            modifiedItems.push(item)
        }else {
            rmId = undefined
        }
    }

    newS = "inCart="
    for (let i = 0; i < (modifiedItems.length - 1);i++){
        item = modifiedItems[i]
        
        newS += item + ":"

        
    }
    document.cookie = newS + modifiedItems[modifiedItems.length - 1]
    
    
    
    
    
}
function createCarts(item){
    let mn = document.getElementById("list")
        
    let id = item.id
    let name = item.name
    let price = item.price
    let src = item.src
    let author = item.author
    let stars = item.stars
    let ratings = item.ratings

    let product = document.createElement("article")
        product.classList.add("cartProduct")
        let stringOfStars = ``
        for (let i = 0; i < stars; i++){
            stringOfStars += `<img class="fullstar" src="img/star.png"></img>`
        }
        product.innerHTML = `
        <img class="display" src="${src}" alt="">
        <h1 class="prname">${name}</h1>
        <div class="stars" alt="${stars} out of 5">
            ${stringOfStars}
            <h6 class="ratings">(${ratings})</h6>
        </div>
        <h6 class="credit">Author ${author}</h6>
        <h2 class="price">${price}.-</h2>
        <div class="removeFromCart" data-id="${id}">
            <img class="removeCart" src="img/trash.png" alt="Remove from cart">
        </div>
        `
        mn.appendChild(product)
}
function createCheckout(price,xitems){
    
    let bd = document.getElementById("cartPageBody")
    let summary = document.createElement("aside")
    summary.id = "summary"
    let shipping = Math.floor(Math.random() * 100)
    summary.innerHTML = ` 
        <h3 class="title" id="ordertit">Order summary</h3>
        <h4 class="small">Subtotal (${xitems} items)</h4>
        <h3 class="num">${price}.-</h3>
        <h4 class="small">Shipping </h4>
        <h3 class="num">${shipping}.-</h3>
        <h4 class="small">Tax (10%) </h4>
        <h3 class="num">${Math.floor(price*0.1)}.-</h3>
        <div class="divider"></div>
        <h3 class="title">Total</h3>
        <h3 id="total">${Math.floor(shipping + (price* 1.1))}.-</h3>
        <div id="checkout">
            <h3 class="white"><b>Checkout</b></h3>
        </div>
    `
    bd.appendChild(summary)

    let yourcart = document.getElementById("yourCart")
    yourcart.textContent = "Your cart (" + xitems + ")"
}

let carts = getCookies()
var price = 0
let xitems = carts.length
if (carts != "undefined"){
    for (let i = 0; i < xitems; i++){
        item = products[carts[i]]

        price += item.price
        createCarts(item)
    }
}

createCheckout(price,xitems)

var Carts = document.getElementsByClassName("removeFromCart")


for (let i = 0; i < Carts.length; i++){
    Carts[i].addEventListener("click",rmCarts)
}

function rmCarts(event){
    let id = event.currentTarget.dataset.id
    
    rmCookie(id)
    location.reload()

    
}
