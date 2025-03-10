const product = [
    {
        id: 0,
        image: 'AppleImages/iPhone14Poster.png',
        title: 'iPhone 14',
        price: 4199,
    },
    {
        id: 1,
        image: 'AppleImages/iPhone14ProPoster.png',
        title: 'iPhone 14 Pro',
        price: 5299,
    },
    {
        id: 2,
        image: 'AppleImages/iPhone13Poster.png',
        title: 'iPhone 13',
        price: 3199,
    },
    {
        id: 3,
        image: 'AppleImages/iPadMiniPoster.png',
        title: 'iPad Mini 6',
        price: 2399,
    },
    {
        id: 4,
        image: 'AppleImages/iPadAirPoster.png',
        title: 'iPad Air 5',
        price: 2899,
    },
    {
        id: 5,
        image: 'AppleImages/iPadProPoster.png',
        title: 'iPad Pro 4th Gen',
        price: 3899,
    },
    {
        id: 6,
        image: 'AppleImages/MacBookM1Poster.png',
        title: 'MacBook M1 Air',
        price: 4399,
    },
    {
        id: 7,
        image: 'AppleImages/MacBookM2Poster.png',
        title: 'MacBook M2 Air',
        price: 5499,
    },
    {
        id: 8,
        image: 'AppleImages/MacBookM2ProGrey.png',
        title: 'MacBook M2 Pro',
        price: 5699,
    },
    {
        id: 9,
        image: 'AppleImages/WatchSEPoster.png',
        title: 'Apple Watch SE',
        price: 1199,
    },
    {
        id: 10,
        image: 'AppleImages/Watch8Poster.png',
        title: 'Apple Watch 8 Series',
        price: 2099,
    },
    {
        id: 11,
        image: 'AppleImages/WatchUltra1.png',
        title: 'Apple Watch Ultra',
        price: 3799,
    },
    {
        id: 12,
        image: 'AppleImages/AirPods3Poster.png',
        title: 'Apple AirPods 3rd Gen',
        price: 829,
    },
    {
        id: 13,
        image: 'AppleImages/AirPodsProPoster.png',
        title: 'Apple AirPods Pro',
        price: 1099,
    },
    {
        id: 14,
        image: 'AppleImages/AirPodsMaxPoster.png',
        title: 'Apple AirPods Max',
        price: 2499,
    },
    {
        id: 15,
        image: 'LogitechImages/Headset/g435/G435Poster.webp',
        title: 'Logitech G435',
        price: 299,
    },
    {
        id: 16,
        image: 'LogitechImages/Headset/g733/G733Poster.webp',
        title: 'Logitech G733',
        price: 699,
    },
    {
        id: 17,
        image: 'LogitechImages/Headset/g933s/G933sPoster.webp',
        title: 'Logitech G933s',
        price: 609,
    },
    {
        id: 18,
        image: 'LogitechImages/Headset/ProX/GProXPoster.webp',
        title: 'Logitech G Pro X Gaming Headset',
        price: 549,
    },
    {
        id: 19,
        image: 'LogitechImages/Keyboard/g810/G810Poster.webp',
        title: 'Logitech G810',
        price: 759,
    },
    {
        id: 20,
        image: 'LogitechImages/Keyboard/G915TKL/G915Poster.webp',
        title: 'Logitech G915 TKL',
        price: 1023.34,
    },
    {
        id: 21,
        image: 'LogitechImages/Keyboard/G413/G413SEPoster.webp',
        title: 'Logitech G413 SE',
        price: 359,
    },
    {
        id: 22,
        image: 'LogitechImages/Keyboard/ProKeyboard/GProPoster.webp',
        title: 'Logitech G Pro Keyboard',
        price: 489,
    },
    {
        id: 23,
        image: 'LogitechImages/Mouse/G203/G203Poster.webp',
        title: 'Logitech G203',
        price: 177.94,
    },
    {
        id: 24,
        image: 'LogitechImages/Mouse/g304/G304Poster.webp',
        title: 'Logitech G304',
        price: 149,
    },
    {
        id: 25,
        image: 'LogitechImages/Mouse/g502x/G502XPoster.webp',
        title: 'Logitech G502X',
        price: 319,
    },
    {
        id: 26,
        image: 'LogitechImages/Mouse/ProXsuperlight/GPROXPoster.webp',
        title: 'Logitech G Pro X Superlight',
        price: 649,
    },
    {
        id: 27,
        image: 'RazerImages/Headset/RazerBarracuda/RazerBarracudaProPoster.jpg',
        title: 'Razer Barracuda Pro',
        price: 1112.33,
    },
    {
        id: 28,
        image: 'RazerImages/Headset/RazerBlacksharkV2Pro/RazerBlackSharkV2ProPoster.jpg',
        title: 'Razer BlackShark V2 Pro',
        price: 889.86,
    },
    {
        id: 29,
        image: 'RazerImages/Headset/RazerBlackSharkV2X/BlackSharkV2XPoster.jpg',
        title: 'Razer BlackShark V2 X',
        price: 266.93,
    },
    {
        id: 30,
        image: 'RazerImages/Headset/RazerKrakenV3/RazerKrakenV3Poster.jpg',
        title: 'Razer Kraken V3',
        price: 444.91,
    },
    {
        id: 31,
        image: 'RazerImages/Keyboard/RazerEVISUBlackWidowV3/RazerEvisuPoster.jpg',
        title: 'Razer EVISU BlackWidow V3 Green Switch',
        price: 885.45,
    },
    {
        id: 32,
        image: 'RazerImages/Keyboard/RazerBlackWidowV3Tenkeyless/RazerBlackWidowV3Poster.jpg',
        title: 'Razer BlackWidow V3 Yellow Switch',
        price: 444.91,
    },
    {
        id: 33,
        image: 'RazerImages/Keyboard/RazerBlackWidowV4Pro/RazerBlackwidowV4ProPoster.jpg',
        title: 'Razer BlackWidow V4 Pro',
        price: 1023.34,
    },
    {
        id: 34,
        image: 'RazerImages/Keyboard/RazerDeathStalkerV2Pro/RazerDeathStalkerV2ProPoster.jpg',
        title: 'Razer DeathStalker V2 Pro',
        price: 1107.93,
    },
    {
        id: 35,
        image: 'RazerImages/Mouse/RazerEVISUOrochiV2/RazerOrochiPoster.jpg',
        title: 'Razer EVISU Orochi V2',
        price: 440.50,
    },
    {
        id: 36,
        image: 'RazerImages/Mouse/RazerBasiliskV3Pro/RazerBasiliskV3ProPoster.jpg',
        title: 'Razer Basilisk V3 Pro',
        price: 711.88,
    },
    {
        id: 37,
        image: 'RazerImages/Mouse/RazerDeathAdderV3/RazerDeathAdderV3ProPoster.jpg',
        title: 'Razer DeathAdder V3 Pro',
        price: 311.42,
    },
    {
        id: 38,
        image: 'RazerImages/Mouse/RazerViperV2Pro/RazerViperV2ProPoster.jpg',
        title: 'Razer Viper V2 Pro',
        price: 667.38,
    },
    {
        id: 39,
        image: 'ROGImages/Headset/AsusROGDeltaSAnimate/AsusROGDeltaSAnimatePic1.png',
        title: 'Asus ROG Delta S Animate',
        price: 975,
    },
    {
        id: 40,
        image: 'ROGImages/Headset/AsusROGDeltaSLightweight/AsusROGDeltaSPic1.png',
        title: 'Asus ROG Delta S Lightweight',
        price: 809,
    },
    {
        id: 41,
        image: 'ROGImages/Headset/AsusROGStrixGoCore/AsusROGStrixGoCorePic1.png',
        title: 'Asus ROG Strix Go Core',
        price: 403,
    },
    {
        id: 42,
        image: 'ROGImages/Headset/AsusROGStrixFusion500/AsusROGStrixFusion500Pic2.png',
        title: 'Asus ROG Strix Fusion 500',
        price: 1064,
    },
    {
        id: 43,
        image: 'ROGImages/Keyboard/AsusROGAzothM701/AsusROGAzothM701WirelessPic1.png',
        title: 'Asus ROG Azoth M701 Wireless',
        price: 1100,
    },
    {
        id: 44,
        image: 'ROGImages/Keyboard/AsusROGFalchionAce/AsusROGFalchionAceWiredPic1.png',
        title: 'Asus ROG Falchion Ace Wired',
        price: 477,
    },
    {
        id: 45,
        image: 'ROGImages/Keyboard/AsusROGStrixFlareII/AsusROGStrixFlareIIAnimatePic1.png',
        title: 'Asus ROG Strix Flare II Animate',
        price: 935,
    },
    {
        id: 46,
        image: 'ROGImages/Keyboard/AsusROGStrixScopePBT/AsusROGStrixScopePBTPic1.png',
        title: 'Asus ROG Strix Scope PBT',
        price: 799,
    },
    {
        id: 47,
        image: 'ROGImages/Mouse/AsusROGStrixP508Carry/AsusP508ROGSTRIXCARRYPic1.png',
        title: 'Asus ROG P508 Strix Carry',
        price: 249,
    },
    {
        id: 48,
        image: 'ROGImages/Mouse/AsusROGChakramXOrigin/AsusROGChakramXOriginPic1.png',
        title: 'Asus ROG Chakram X Origin',
        price: 589,
    },
    {
        id: 49,
        image: 'ROGImages/Mouse/AsusROGHarpeAceAimLab/AsusROGHARPEACEAimLabPic1.png',
        title: 'Asus ROG HARPE ACE Aim Lab',
        price: 535,
    },
    {
        id: 50,
        image: 'ROGImages/Mouse/AsusROGSpathaX/AsusROGSPATHAXWirelessPic1.png',
        title: 'Asus ROG SPATHA X Wireless',
        price: 599,
    },
    {
        id: 51,
        image: 'images/loveintokyo1.jpg',
        title: 'Love in Tokyo',
        price: 300,
    },
    {
        id: 52,
        image: 'images/black.jpg',
        title: 'Stars Black',
        price: 300,
    },
    {
        id: 53,
        image: 'images/cat.jpg',
        title: 'Modaeri&apos;s Summer',
        price: 300,
    },
    {
        id: 54,
        image: 'images/happy.jpg',
        title: 'Happy Daisies',
        price: 300,
    },
    {
        id: 55,
        image: 'images/type-c.jpg',
        title: 'Ugreen 1m Usb-c Cable',
        price: 34,
    },
    {
        id: 56,
        image: 'images/lighting.webp',
        title: 'Usb-c to Lighting Cable',
        price: 99,
    },
    {
        id: 57,
        image: 'images/microusb.jpg',
        title: 'Micro-usb Cable',
        price: 15,
    },
    {
        id: 58,
        image: 'images/samsungcharger.jpg',
        title: '45W Samsung Charger',
        price: 49,
    },
    {
        id: 59,
        image: 'images/charger.jpg',
        title: 'Ugreen 40W Charger',
        price: 29,
    },
    {
        id: 60,
        image: 'images/mipowerbank.webp',
        title: 'Mi Powerbank 10000MAH',
        price: 49,
    },
    {
        id: 51,
        image: 'images/baseus.webp',
        title: 'Baseus Powerbank 20000MAH',
        price: 109,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>RM ${price}</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "RM "+0;
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "RM "+total;
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>RM ${price}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}

function checkcart() {
    if (cart.length === 0) {
      alert("Your cart is currently empty. Please add items to your cart.");
    }
    else{
        window.location.href = "payment.html";
    }
}