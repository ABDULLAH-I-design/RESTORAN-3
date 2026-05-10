const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

const searchBtn = document.querySelector("#search-btn"); 
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");













cartBtn.addEventListener("click", function(){
    cartItem.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(!e.composedPath().includes(cartBtn) &&
           !e.composedPath().includes(cartItem)) {
            cartItem.classList.remove("active");
        }
    });
});


menuBtn.addEventListener("click", function(){
    navbar.classList.toggle("active");
    document.addEventListener("click", function(e){
        if(!e.composedPath().includes(menuBtn) &&
           !e.composedPath().includes(navbar)) {
            navbar.classList.remove("active");
        }
    });
});







const cartContainer = document.querySelector('.cart-items-container');
const cartCount = document.getElementById('cart-count');

let cartItems = []; 
let total = 0;


function updateCart() {
    cartContainer.innerHTML = ''; 
    total = 0;

   
    cartItems.forEach((item, index) => {
        total += parseFloat(item.price);

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.style.display = "flex";
        cartItem.style.justifyContent = "space-between";
        cartItem.style.alignItems = "center";
        cartItem.style.margin = "5px 0";

     
        cartItem.innerHTML = `
            <span>${index + 1}. ${item.name}</span>
            <span>$${item.price}</span>
            <button class="remove-item" data-index="${index}">X</button>
        `;

        cartContainer.appendChild(cartItem);

     
        cartItem.querySelector('.remove-item').addEventListener('click', () => {
            cartItems.splice(index, 1);
            updateCart();
        });
    });

    if(cartItems.length > 0) {
        const totalEl = document.createElement('h3');
        totalEl.textContent = `Total: $${total.toFixed(2)}`;
        cartContainer.appendChild(totalEl);
    }


    const checkoutBtn = document.createElement('a');
    checkoutBtn.classList.add('btn', 'checkout-btn');
    checkoutBtn.href = "#";
    checkoutBtn.textContent = 'Checkout Now';
    cartContainer.appendChild(checkoutBtn);

    checkoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(cartItems.length === 0){
            alert("السلة فارغة!");
            return;
        }
        alert("تم الطلب بنجاح!");
        cartItems = [];
        total = 0;
        updateCart();
    });

    cartCount.textContent = cartItems.length;
}





const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));

        
        cartItems.push({name, price});
        updateCart();

      
        button.style.border = '2px solid blue';
        button.style.borderRadius = '5px'; 

    
        addToCartButtons.forEach(btn => {
            if(btn !== button){
                btn.style.border = ''; 
            }
        });
    });
});




const productButtons = document.querySelectorAll('.product-btn a, .add-circle');
productButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const box = btn.closest('.box');
        const name = box.querySelector('.name') ? box.querySelector('.name').textContent : box.querySelector('.title').textContent;
        const priceText = box.querySelector('.price').textContent.replace('$','').trim();
        const price = parseFloat(priceText);

        cartItems.push({name, price});
        updateCart();
    });
});






const learnMoreBtn = document.getElementById("learn-more-btn");
const moreText = document.querySelector(".more-text");

learnMoreBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (moreText.style.display === "block") {
        moreText.style.display = "none";
        learnMoreBtn.textContent = "Learn more";
    } else {
        moreText.style.display = "block";
        learnMoreBtn.textContent = "Show less";
    }
});


const readMoreButtons = document.querySelectorAll(".read-more-btn");

readMoreButtons.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        const moreText = this.previousElementSibling;

        if (moreText.style.display === "block") {
            moreText.style.display = "none";
            this.textContent = "read more";
        } else {
            moreText.style.display = "block";
            this.textContent = "show less";
        }
    });
});