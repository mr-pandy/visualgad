const mobNav = document.getElementById('mobNav');
const navToggle = document.querySelector('.navbar-toggler');
const navLinks = document.querySelector('.collapse');
const header =  document.querySelector('header');
const spanContent = document.querySelector('.navbar-toggler-icon');

navToggle.addEventListener('click', ()=>{
    //Check for class name of show-list to add height
    // if(navLinks.classList.contains('menu-wrap')){
    //     navLinks.classList.remove('menu-wrap');
    //     header.classList.remove('mob')
    // }else{
    //     header.classList.add('mob')
    //     navLinks.classList.add('menu-wrap');
    // }
//    spanContent.innerHTML = `<img src="/variant-ten/assets/src/close.png" alt="">`
    //navLinks.classList.toggle('menu-wrap')
    // header.classList.remove('mob')
});


// Slick Slider Configuration
$(document).ready(function () {
    // Homepage Sliders
    $('.home-sliders').slick({
      autoplaySpeed: 2000,
      slidesToShow: 3,
      dots: true,
      prevArrow: $('.prev-btn'),
      nextArrow: $('.next-btn'),
    })
  
   
  })

