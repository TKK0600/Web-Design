// for category selection
const categoryTitle1 = document.querySelectorAll('.category_title_4option');
const categoryTitle = document.querySelectorAll('.category_title_5option');
const allCategoryPosts = document.querySelectorAll('.all');

for (let i = 0; i < categoryTitle1.length; i++) {
    categoryTitle1[i].addEventListener('click', filterPosts.bind(this, categoryTitle1[i]));
}

function filterPosts(item) {
    changeActivePosition(item);
    for (let i = 0; i < allCategoryPosts.length; i++) {
        if (allCategoryPosts[i].classList.contains(item.attributes.id.value)) {
            allCategoryPosts[i].style.display = "block";
        }
        else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem) {
    for (let i = 0; i < categoryTitle1.length; i++) {
        categoryTitle1[i].classList.remove('active');
    }
    activeItem.classList.add('active');
}


// 
for (let i = 0; i < categoryTitle.length; i++) {
    categoryTitle[i].addEventListener('click', filterPosts2.bind(this, categoryTitle[i]));
}

function filterPosts2(item) {
    changeActivePosition2(item);
    for (let i = 0; i < allCategoryPosts.length; i++) {
        if (allCategoryPosts[i].classList.contains(item.attributes.id.value)) {
            allCategoryPosts[i].style.display = "block";
        }
        else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition2(activeItem) {
    for (let i = 0; i < categoryTitle.length; i++) {
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
}

// for product detail page
let bigImg = document.querySelector('.big-img img');
function showImg(pic) {
    bigImg.src = pic;
}

// for add to cart function
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
    cart.classList.add("activate");
};

closeCart.onclick = () => {
    cart.classList.remove("activate");
};

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", start);
}
else {
    start();
}

// Function
function start() {
   addEvents();
}

function update(){
    addEvents();
    updateTotal();
}

function addEvents(){
    // Remove items from cart
    let cartRemove_btns = document.querySelectorAll(".cart-remove");
    console.log(cartRemove_btns);
    cartRemove_btns.forEach((btn) => {
        btn.addEventListener("click", handle_removeCartItem);
    });

    let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
    cartQuantity_inputs.forEach(input => {
        input.addEventListener("change", handle_changeItemQuantity);
    })

    let addCart_btns = document.querySelectorAll(".add-cart");
    addCart_btns.forEach((btn) => {
        btn.addEventListener("click", handle_addCartItem);
    });
}

function handle_addCartItem(){
    let product = this.parentElement;
    let title = product.querySelector(".pname").innerHTML;
    let price = product.querySelector(".price").innerHTML;
    let productImg = product.querySelector(".product-img").src;
    console.log(title, price, productImg);

    let newToAdd = {
        title,
        price,
        productImg
    };

    let cartBoxElement = CartBoxComponent(title, price, productImg);
}

function handle_removeCartItem(){
    this.parentElement.remove();

    update();
}

function handle_changeItemQuantity(){
    if(isNaN(this.value) || this.value < 1){
        this.value = 1;
    }
    this.value = Math.floor(this.value);

    update();
}

function updateTotal(){
    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = cart.querySelector(".total-price");
    let total = 0;
    cartBoxes.forEach(cartBox => {
        let priceElement = cartBox.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("RM ", ""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += price * quantity;
    });

    total = total.toFixed(2);

    totalElement.innerHTML = "RM " + total;
}

`<div class ="cart-box">
    <img src ="../AppleImages/AirPods3rd" alt ="" class ="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">AirPods</div>
        <div class="cart-price">$50</div>
        <input type="number" value="1" class="cart-quantity"></input>
    </div>
    <i class="fas fa-window-remove cart-remove"></i>
</div>`