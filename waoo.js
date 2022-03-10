
const wrapper = document.querySelector(".sliderWraper")
console.log(wrapper)

// wrapper.style.transform= "translateX(-400vw)"

const ManuItems = document.querySelectorAll(".ManuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "img/jordan.jpg"
            },
            {
                code: "darkblue",
                img: "img/jordan.jpg",
            },
        ],
    },

    {
        id: 2,
        title: "Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "img/airfocre wiht.jpg"
            },
            {
                code: "green",
                img: "img/airfocre wiht.jpg",
            },
        ],
    },

    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "img/a leg4.jpg"
            },
            {
                code: "green",
                img: "img/a leg4.jpg",
            },
        ],
    },

    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "img/a leg7.jpg"
            },
            {
                code: "lightgray",
                img: "img/a leg7.jpg",
            },
        ],
    },

    {
        id: 5,
        title: "Hipie",
        price: 149,
        colors: [
            {
                code: "gray",
                img: "img/a leg99.jpg"
            },
            {
                code: "black",
                img: "img/a leg99.jpg",
            },
        ],
    },
]

let ChoosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


ManuItems.forEach((item, index) => {
item.addEventListener("click", ()=>{
    // Change the curent slide
    wrapper.style.transform= `translateX(${-100 * index}vw)`;
    // Change the choosen product
    ChoosenProduct = products[index]
    // Change text of curentProduct
    currentProductTitle.textContent = ChoosenProduct.title
    currentProductPrice.textContent = "$" + ChoosenProduct.price
    currentProductColors.textContent = ChoosenProduct.colors
    currentProductSizes.textContent = ChoosenProduct.sizes
    currentProductImg.src = ChoosenProduct.colors[0].img

    // Assigin new colors
    currentProductColors.forEach((color, index)=> {
        color.style.backgroungcolor = ChoosenProduct.colors[index].code;
    });
});
});


currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = ChoosenProduct.colors[index].img;
  });
});




// GAT ALOT TO DO HERE => I  GAT A LOT TO DO HERE BIKO

prompt("welcome to 'comfort place' reply Yes if you like the content ");
const cart = [];


function addToCart(product, dollar, price){
    let data = {product: product, price: price};
    console.log(data);
    cart.push(data)
    console.log(cart)
alert(product + " is "+ dollar + price)
}

function like(itemId) {
const elem = document.getElementById(itemId);
console.log(elem.classList)
if(elem.classList.contains("colorBlue",+"coloo",+ "coolo" )){
    elem.classList.remove("colorBlue",+"coloo",+ "coolo");
} else {
    elem.classList.add("colorBlue",+"coloo",+ "coolo");
}
}

// function like(itermId) {
//     const elemm = document.getElementById(itermId);
//     console.log( elem.classList)
//     if( elemm.classList.contains("colorred",+"colo" +"hart")){
//         elemm.classList.remove("colorred",+"colo" +"hart");
//     }else{
//         elemm.classList.add("colorred",+"colo" +"hart");
//     }
// }








// function show(){
//  console,log("Onahi");
// }
// invoke
// show();


// function addndcart(){
//     alert("buy-Chopard?")
// }

// function adddToCart(){
//     alert("buy-Oris?")
// }

(function(){
var fasIcon = document.getElementById("fas")
var cart = document.getElementById("icon")
cart.addEventListener("click", function(){

})
})

(function (){
var cartBtn = document.querySelectorAll(".span");

cartBtn.forEach(function(btn) {
btn.addEventListener("click", function (event){
    console.log(event);
})
})
}
)
