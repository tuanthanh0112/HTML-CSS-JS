let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-contaniner');
let formBtn = document.querySelector('#loign-btn');
let loginForm = document.querySelector('.login-form-contaner');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let videoBtn = document.querySelectorAll('.vid-btn');
let navBar = document.querySelector('.Navbar');


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
videoBtn.forEach(btn => {
    btn.addEventListener('click', () =>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});
// chạy ngang
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
   
});
var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        450:{
            sliderPerView: 2,
        },
        768:{
            sliderPerView: 3,
        },
        991:{
            sliderPerView: 4,
        },
        1024:{
            sliderPerView: 5,
        },
    },
});