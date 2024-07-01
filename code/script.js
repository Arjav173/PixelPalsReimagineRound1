const hairProduct =[
    {
        productName : "Shampoos",
        img:"./images/image-removebg-preview (2).png"
    },
    {
        productName : "Styling Gels",
        img:"./images/image-removebg-preview (2).png"
    },
    {
        productName : "Hair Growth",
        img:"./images/image-removebg-preview (2).png"
    },
    {
        productName : "Hair Creams",
        img:"./images/image-removebg-preview (2).png"
    },
    {
        productName : "Conditioners",
        img:"./images/image-removebg-preview (2).png"
    },
]

var container =""

hairProduct.forEach(function(value){
    container+=` <div class="card bg-[#F2EFEB] w-[20vw] px-[2vw] py-[2vh] mt-[3vw] rounded-xl">
                <h1 class="text-[2vw] text-center text-[#1025A1] font-semibold">${value.productName}</h1>
                <img class="mt-[3vw] w-full h-[30vh] object-cover " src="${value.img}" alt="">
            </div>`
})

document.querySelector(".cards").innerHTML = container;