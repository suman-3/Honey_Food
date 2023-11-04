const header = document.querySelector("header")
 window.addEventListener("scroll",function(){
    header.classList.toggle("sticky" , window.scrollY > 80);
 })

 const sr = ScrollReveal(
   {
      origin:'top',
      distance:'85px',
      duration: 2500,
      reset: true
   }
 )

 // taext animation effect...........
 var typed = new Typed('.auto-type', {
   strings: ['Enjoy The Taste','Hallo customers' , 'Flat Sale 25%' , ' Grab New Offers'],
   typeSpeed: 90,
   backSpeed: 70,
   loop:true,
 })




 // dealy for home section.....
 sr.reveal('.home-text',{delay:200});
 sr.reveal('.home-image',{delay:300});

 //delay for container section.....
 sr.reveal('.container',{delay:200});
 
//delay for abour section.....
 sr.reveal('.about-image',{});
 sr.reveal('.about-text',{delay:300});

 //delay for shop section(middle-text).......
 sr.reveal('.containemiddle-text',{});
 sr.reveal('.row-btn , .shop-content',{delay:300});

//delay for review and contact section........
 sr.reveal('.review-content',{delay:200});
 sr.reveal('.contact',{delay:200});

 let menu = document.querySelector('#menu-icon');
 let navlist = document.querySelector('.navlist');

 menu.onclick = ()=> {
   menu.classList.toggle('bx-x');
   navlist.classList.toggle('open');
 }
window.onscroll = () => {
   menu.classList.remove('bx-x')
   navlist.classList.remove('open')
}

// add active color on nav button.................
let btns = document.getElementsByClassName('clk')

for (let i=0;i<btns.length;i++){
  btns[i].addEventListener('click', function() {
    let curent = document.getElementsByClassName('active');
    curent[0].className = curent[0].className.replace('active');
    this.className +=" active";
  })
}


