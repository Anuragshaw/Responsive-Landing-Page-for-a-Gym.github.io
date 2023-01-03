burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
nav_list = document.querySelector('.nav_list');

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('v-class');
    nav_list.classList.toggle('h-nav');
    
})