let products = [
    {
        id:0,
        name:"Vattenpass",
        price:999,
        list1:"thing1",
        list2:"thing2",
        list3:"thing3",
        stars:4,
        author: `<a class="credit" href="https://commons.wikimedia.org/wiki/File:Vpass-1.JPG">Svjo</a>`,
        src:"img/vattenpass/vpass-1.JPG"
    },
    {
        id:1,
        name:"Vattenpass",
        price:499,
        list1:"thing1",
        list2:"thing2",
        list3:"thing3",
        stars:4,
        author: `<a class="credit" href="https://pixabay.com/photos/spirit-level-tool-red-cord-balance-280810/">Walter Bichler</a>`,
        src:"img/vattenpass/vpass-2.JPG"
    },
    {
        id:2,
        name:"Vattenpass",
        price:80,
        list1:"thing1",
        list2:"thing2",
        list3:"thing3",
        stars:1,
        author: `<a class="credit" href="https://pixabay.com/photos/spirit-level-tool-red-cord-balance-280811/">Walter Bichler</a>`,
        src:"img/vattenpass/vpass-3.JPG"
    },
    {
        id:3,
        name:"Vattenpass",
        price:356,
        list1:"thing1",
        list2:"thing2",
        list3:"thing3",
        stars:2,
        author: `<a class="credit" href="https://pixabay.com/photos/craft-spirit-level-miniature-figures-3838891/">Wilfried Pohnke</a>`,
        src:"img/vattenpass/vpass-4.JPG"
    },
    {
        id:4,
        name:"Vattenpass",
        price:457,
        list1:"thing1",
        list2:"thing2",
        list3:"thing3",
        stars:3,
        author: `<a class="credit" href="https://www.pexels.com/photo/bearded-man-holding-a-yellow-spirit-level-8482816/">Thirdman</a>`,
        src:"img/vattenpass/vpass-5.JPG"
    },
    {
        id:5,
        name:"Vattenpass",
        price:9999,
        list1:"thing1",
        list2:"thing2",
        list3:"thing3",
        stars:5,
        author: `<a class="credit" href="https://www.pexels.com/photo/person-holding-a-spirit-level-8488008/">Kindel Media</a>`,
        src:"img/vattenpass/vpass-6.JPG"
    },
    {
        id:6,
        name:"Vattenpass",
        price:234,
        list1:"thing1",
        list2:"thing2",
        list3:"thing3",
        stars:2,
        author: `<a class="credit" href="https://www.pexels.com/photo/an-engineer-holding-a-spirit-level-against-a-wall-8482824/">Thirdman</a>`,
        src:"img/vattenpass/vpass-7.JPG"
    },
    {
        id:7,
        name:"Vattenpass",
        price:5634,
        list1:"thing1",
        list2:"thing2",
        list3:"thing3",
        stars:4,
        author: `<a class="credit" href="https://unsplash.com/photos/white-spirit-level-on-brown-table-_qpY2jqedwU">Louis Hansel</a>`,
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
    let mn = document.getElementById("cartPage")
        
    let id = item.id
    let name = item.name
    let price = item.price
    let src = item.src
    let author = item.author
    let stars = item.stars

    let product = document.createElement("article")
        product.classList.add("cartProduct")
        let stringOfStars = ``
        for (let i = 0; i < stars; i++){
            stringOfStars += `<img class="fullstar" src="img/star.png" alt="${stars} out of 5"></img>`
        }
        product.innerHTML = `
        <img class="display" src="${src}" alt="">
            <h6 class="galindo-regular credit">Author ${author}</h6>
            <h1 class="galindo-regular">${name}</h1>
            <div class="fullstar">
                ${stringOfStars}
            </div>
            <div class="removeFromCart" data-id="${id}">
                <img class="remove" src="img/-.png" alt="remove from cart">
                <img class="Ccircle" src="img/circle.png" alt="">
            </div>
            <h2 class="galindo-regular">${price}.-</h2>
        `
        mn.appendChild(product)
}
function createCheckout(price){
    
    let mn = document.getElementById("cartPage")
    let checkout = document.createElement("article")
    checkout.id = "checkout"
    checkout.innerHTML = ` 
        <h2 class="galindo-regular">Total Price: ${price}.-</h2>
    `
    mn.appendChild(checkout)
}
let carts = getCookies()
var price = 0
if (carts != "undefined"){
    for (let i = 0; i < carts.length; i++){
        item = products[carts[i]]

        price += item.price
        createCarts(item)
    }
}

createCheckout(price)

var Carts = document.getElementsByClassName("removeFromCart")


for (let i = 0; i < Carts.length; i++){
    Carts[i].addEventListener("click",rmCarts)
}

function rmCarts(event){
    let id = event.currentTarget.dataset.id
    
    rmCookie(id)
    location.reload()

    
}
