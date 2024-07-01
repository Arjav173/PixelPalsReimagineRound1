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
    },
]

var container =""

hairProduct.forEach(function(value){
    container+=` <div class="card bg-[#F2EFEB] w-[20vw] px-[2vw] py-[2vh] mt-[3vw] rounded-xl">
                <h1 class="text-[2vw] text-center text-[#1025A1] font-semibold">${value.productName}</h1>
                <img class="mt-[3vw] w-full h-[25vh] object-cover " src="${value.img}" alt="">
            </div>`
})

document.querySelector(".cards").innerHTML = container;