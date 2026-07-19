/*=========================================
MOONLIGHT WISHES
script.js
=========================================*/

const moon = document.getElementById("moon");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");

/*==========================
OPEN POPUP
==========================*/

moon.addEventListener("click", () => {

    popup.classList.add("show");

});

/*==========================
CLOSE BUTTON
==========================*/

closeBtn.addEventListener("click", () => {

    popup.classList.remove("show");

});

/*==========================
CLICK OUTSIDE
==========================*/

popup.addEventListener("click", (e) => {

    if(e.target === popup){

        popup.classList.remove("show");

    }

});

/*==========================
ESC KEY
==========================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        popup.classList.remove("show");

    }

});

/*==========================
MOON GLOW EFFECT
==========================*/

setInterval(()=>{

    moon.animate([

        {
            filter:"brightness(1)"
        },

        {
            filter:"brightness(1.2)"
        },

        {
            filter:"brightness(1)"
        }

    ],{

        duration:3000,

        iterations:1,

        easing:"ease-in-out"

    });

},6000);