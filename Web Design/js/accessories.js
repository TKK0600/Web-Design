var a = document.createElement('a'); 
let products = {
    data: [
      {
        productName: "Love in Tokyo",
        category: "PhoneCase",
        price: "300",
        image: "images/loveintokyo1.jpg",
        link: "loveintokyo.html",
        cart: "addtocart.html"
      },
      {
        productName: "Stars Black",
        category: "PhoneCase",
        price: "300",
        image: "images/black.jpg",
        link: "black.html",
        cart: "addtocart.html"
      },
      {
        productName: "MODAERI's summer",
        category: "PhoneCase",
        price: "300",
        image: "images/cat.jpg",
        link: "summer.html",
        cart: "addtocart.html"
      },
      {
        productName: "Happy Daisies",
        category: "PhoneCase",
        price: "300",
        image: "images/happy.jpg",
        link: "happy.html",
        cart: "addtocart.html"
      },
      {
        productName: "UGREEN 1m USB-C Cable",
        category: "Cables",
        price: "34",
        image: "images/type-c.jpg",
        link: "usb-c.html",
        cart: "addtocart.html"
      },
      {
        productName: "USB-C to Lighting Cable (1m)",
        category: "Cables",
        price: "99",
        image: "images/lighting.webp",
        link: "lighting.html",
        cart: "addtocart.html"
      },
      {
        productName: "Micro-USB Cable (1m)",
        category: "Cables",
        price: "15",
        image: "images/microusb.jpg",
        link: "usb.html",
        cart: "addtocart.html"
      },
      {
        productName: "45W Samsung Charger",
        category: "Charger",
        price: "49",
        image: "images/samsungcharger.jpg",
        link: "samsungcharger.html",
        cart: "addtocart.html"
      },
      {
        productName: "UGREEN 40W Charger",
        category: "Charger",
        price: "29",
        image: "images/charger.jpg",
        link: "ugreencharger.html",
        cart: "addtocart.html"
      },
      {
        productName: "Mi Powerbank 10000mAh",
        category: "Powerbank",
        price: "49",
        image: "images/mipowerbank.webp",
        link: "mipowerbank.html",
        cart: "addtocart.html"
      },
      {
        productName: "Baseus Powerbank 20000mAh",
        category: "Powerbank",
        price: "109",
        image: "images/baseus.webp",
        link: "baseus.html",
        cart: "addtocart.html"
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "RM " + i.price;
    container.appendChild(price);
    //link to product detials
    let link = document.createElement('a');
    let anchor = document.createTextNode("Product Detials");
    link.appendChild(anchor);
    link.href = i.link;
    container.appendChild(link);
    let str = document.createElement('p')
    str.innertext = "\n";
    container.appendChild(str);
    //link to cart
    let cart = document.createElement('a');
    let text = document.createTextNode("Interested to the product? Click here");
    cart.appendChild(text);
    cart.href = i.cart;
    container.appendChild(cart);


    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };