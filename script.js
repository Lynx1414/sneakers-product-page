
// const lightbox = document.querySelector(".lightbox");
const wide_img = document.querySelector(".wide_img");
const wideImages = document.querySelectorAll(".wide_img img");
const modale = document.getElementById("modale");
const modalContent = document.querySelector(".modal-content");
const smallImages = document.querySelectorAll(".small_img img");



const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let slideIndex = 0;

// Masquer la lightbox au chargement de la page
hideModale();

// Fonction pour masquer la lightbox
function hideModale() {
    modale.style.display = "none";
}

// Fonction pour afficher la lightbox
function showModale() {
    for (let link of wideImages) {
        let modalImg = document.getElementById("currentImg");
        modalImg.src = link.src;
    }
    modale.style.display = "block";
}

const cart = document.getElementById("acces");
let divCart = document.createElement("div");
// fonction pour afficher la cart
function displayCart() {
    divCart.innerHTML = `<div class="cart_title"><h5>Cart</h5>
    <hr></div>
    <div class="cart_content">
    <p class= "contentCart">Your cart is empty.</p></div>`;
    cart.appendChild(divCart);
    divCart.classList.add("cart");
}

//fonction pour masquer la cart
function clearCart() {
    cart.removeChild(divCart);
}

// Fonction pour changer de slide
function plusSlides(n) {
    showSlide(slideIndex += n);
}

// Fonction pour afficher la slide actuelle
function showSlide(n) {
    slideIndex = n;
    if (slideIndex < 0) {
        slideIndex = smallImages.length - 1;
    } else if (slideIndex >= smallImages.length) {
        slideIndex = 0;
    }
    modalContent.innerHTML = `<img src="${smallImages[slideIndex].src}" alt="">`;
}

// Ajouter des écouteurs d'événements pour les miniatures

// Ajouter des écouteurs d'événements pour les buttons plus et moins et afficher la quantité d'articles dans le cart

// Ajouter un ecouter d'evenement sur le boutton SubmitBtn et afficher la quantité d'articles dans le cart 

//quantité d'articles dans le cart
let qty = 0;
let nombArt = document.getElementById("nbArt").value;
let quantity= document.querySelector('.contentCart');// `<p class="contentCart">${nombArt}</p>`

function addQuantity() {
    qty= nombArt++;
    document.getElementById("nbArt").value = nombArt;
    displayQuantityToCart()
}

function removeQuantity() {
    qty= nombArt--;
    document.getElementById("nbArt").value = nombArt;
    displayQuantityToCart()
}

function displayQuantityToCart() {
    quantity.innerHTML = "your cart contains" + nombArt + "articles";
    
}