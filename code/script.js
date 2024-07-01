const hairProduct =[
    {
        productName : "Shampoos",
        img:"./images/image-removebg-preview (2).png"
    },
    {
        productName : "Styling Gels",
        img:"./images/Artboard_5_c719899b-0e66-48a4-b3ca-9cadf6b8cf09.avif"
    },
    {
        productName : "Hair Growth",
        img:"./images/image-removebg-preview (3).png"
    },
    {
        productName : "Hair Creams",
        img:"./images/Artboard_4_986df805-e5dc-447c-b82b-1403c0846fa7.avif"
    },
    {
        productName : "Conditioners",
        img:"./images/Artboard_3_0e56e93c-a50f-4805-9326-086bee9f07af.avif"
    }
]

var container =""

hairProduct.forEach(function(value){
    container+=` <div class="card bg-[#F2EFEB] w-[20vw] px-[2vw] py-[2vh] mt-[3vw] rounded-xl">
                <h1 class="text-[2vw] text-center text-[#1025A1] font-semibold">${value.productName}</h1>
                <img class="mt-[3vw] w-full h-[25vh] object-cover " src="${value.img}" alt="">
            </div>`
})

document.querySelector(".cards").innerHTML = container;

const bestSellers = [
    {
        h1 : "Intensive Hair Growth Hair Growth Serum",
        img: "./images/WhatsAppImage2024-05-02at5.16.54PM-removebg-preview.png",
        about: "Boosts hair Growth Increases Thickness Strengthens Hair ",
        price: "₹584"
    },
    {
        h1 : "Growth Strong Combo Shampoo + Serum",
        img: "./images/image-removebg-preview.png",
        about: "Controls Hair Loss Boosts Hair Growth Reduce Hair Thinning",
        price: "₹1393"
    },
    {
        h1 : "Hair Growth oil <br> with Capilia Longa",
        img: "./images/image-removebg-preview (3).png",
        about: "Nourishes hair & boosts Hair Growth Reduce Hair breakage",
        price: "₹539"
    },
    {
        h1 : "Hair Styling Combo <br> Hair Gel + Cream",
        img: "./images/1.ArataHairStylingCombo-removebg-preview.png",
        about: "Reduce breakage & offer moisture for healthy styling.",
        price: "₹989"
    },
    {
        h1 : "Hair Fix Stick <br> Anti-Frizz",
        img: "./images/Primarycopy3-removebg-preview.png",
        about: "Tames flyaways & smooths hair for a sleek look",
        price: "₹718"
    },
]
var contain = ""

bestSellers.forEach(function(value){
    contain += `<div class="SingleCard bg-[#F2EFEB] w-[25vw] py-[5vh] mt-[3vw] rounded-xl flex flex-col justify-center items-center">
                    <h1 class="text-[1.8vw] text-center text-[#1025A1] font-semibold">${value.h1}</h1>
                    <img class="h-[30vh] object-cover"
                         src="${value.img}"
                         alt="">
                    <div class="about-Price flex items-center justify-between px-[3vw] text-[#1025A1] font-semibold mt-[3vh]">
                        <div class="about w-2/3">
                            <h1>${value.about}</h1>
                        </div>
                        <div class="price text-[1.8vw]">
                            <h1>${value.price}</h1>
                        </div>
                    </div>
                </div>`
})
document.querySelector(".BestSellerCards").innerHTML = contain
const scrollStep = 300; // Adjust this value to control the scroll distance

function scrollLeft() {
    console.log("Left scroll button clicked");
    const store = document.querySelector('.BestSellerCards');
    if (store) {
        store.scrollBy({
            left: -scrollStep,
            behavior: 'smooth'
        });
    } else {
        console.error("Element '.BestSellerCards' not found");
    }
}

function scrollRight() {
    console.log("Right scroll button clicked");
    const store = document.querySelector('.BestSellerCards');
    if (store) {
        store.scrollBy({
            left: scrollStep,
            behavior: 'smooth'
        });
    } else {
        console.error("Element '.BestSellerCards' not found");
    }
}

document.getElementById('scrollLeftButton').addEventListener('click', scrollLeft);
document.getElementById('scrollRightButton').addEventListener('click', scrollRight);

const gifs = [
    {
        img:"images/1716491254368.gif",
        about:"Derma Tested"
    },
    {
        img:"images/1716491282085.gif",
        about:"Plastic Neutral"
    },
    {
        img:"images/1716491305116.gif",
        about:"Cruelty Free"
    },
    {
        img:"images/1716491338059.gif",
        about:"High Performing"
    },
    {
        img:"images/1716491384295.gif",
        about:"Plant Based"
    }
]
var gifContainer = ""

gifs.forEach(function(value){
    gifContainer += `<div class="1st flex flex-col items-center">
                            <img class="w-[5vw]" src="${value.img}" alt="GIF" loop>
                            <h1 class="text-[#1025A1] mt-[2vh]">${value.about}</h1>
                        </div>`
})

document.querySelector(".gifs").innerHTML = gifContainer