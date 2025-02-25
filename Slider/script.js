const arrow_left= document.querySelector(".left");
const arrow_right= document.querySelector(".right");
const slider= document.querySelector('.slider');
const images = document.querySelectorAll('.imge')

let snum = 1; 

arrow_right.addEventListener('click',()=>{
    if (snum < images.length){
        slider.style.transform = `translateX(-${snum * 760}px)`;
        snum++;
    }else{
    slider.style.transform = `translateX(${0}px)`;  
    snum =1;
    }
})
arrow_left.addEventListener('click',()=>{
    if (snum > 1){
        slider.style.transform = `translateX(-${(snum-2) * 760}px)`;
        snum--;
    }else{
    slider.style.transform = `translateX(${(length-1)*760}px)`;  
    snum = length;
    }
})
const butt=document.getElementById("butt")


butt.addEventListener('click',()=>{
    window.location="www.facebook.com";
    // win.focus()
})