const navToggle = document.querySelector('.navbar-toggler');
const navLinks = document.querySelector('menu-wrap');
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
    // header.classList.add('mob')
    // navLinks.classList.toggle('menu-wrap')
    // header.classList.remove('mob')
});