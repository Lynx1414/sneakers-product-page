
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

// Changer de slide
function plusSlides(n) {
    showSlide(slideIndex += n);
}

// Afficher la slide actuelle
function showSlide(n) {
    slideIndex = n;
    if (slideIndex < 0) {
        slideIndex = smallImages.length - 1;
    } else if (slideIndex >= smallImages.length) {
        slideIndex = 0;
    }
    modalContent.innerHTML = `<img src="${smallImages[slideIndex].src}" alt="">`;
}

// Afficher le cart
const cart = document.getElementById("acces");
let divCart = document.createElement("div");
divCart.classList.add("cart");
let qty = 0;
let nbArt = document.getElementById("nbArt");

function displayCart() {
    if (qty == 0) {
        divCart.innerHTML = `<div class="cart_title">
        <h5>Cart</h5>
        <hr>
        </div>
        <div class="cart_content">
        <p class= "contentCart">Your cart is empty.</p></div>`;
        cart.appendChild(divCart);
    } else {
        divCart.innerHTML = `<div class="cart_title">
    <h5>Cart</h5>
    <hr></div>
    <div class="cart_content">
    <p class= "contentCart">Your cart contains ${qty} article(s)</p>
    </div>`;
        cart.appendChild(divCart);
    }
}

//Masquer le cart
function undisplayCart() {
    cart.removeChild(divCart);
}

//Ajouter au Cart
function displayQuantityToCart() {
    if (qty > 0) {
        divCart.innerHTML = `<div class="cart_title">
        <h5>Cart</h5>
        <hr></div>
        <div class="cart_content">
        <p class= "contentCart">Your cart contains ${qty} article(s)</p>
        <div class="cart_btn">
        <button onclick= "clearCart()" id="cancelBtn" type="button">Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="./payment.html">
        <button id="payBtn" type="submit">Proceed with payment</button>
        </a>
        </div>
        </div>`;
        cart.appendChild(divCart);
    } else {
        cart.removeChild(divCart);
        displayCart();
    }
}

//Cancel addToCart
function clearCart() {
    qty = 0;
    nbArt.value = 0;
    displayCart();
    undisplayCart();
}

// Manage quantité d'articles dans le cart
function addQuantity() {
    qty++;
    nbArt.value = qty;
}

function removeQuantity() {
    if (qty > 0) {
        qty--;
        nbArt.value = qty;
    }
}
//todo proceed with payment + contact form
