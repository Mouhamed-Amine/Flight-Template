'use strict'
let spinnerWrapper = document.querySelector('.spinner-wrapper');
let Navbar = document.querySelector('.second_navbar');

//slidwrapper.style.opacity='0';
//slidewrapper.style.display='none;

window.addEventListener('load',()=>{
spinnerWrapper.style.opacity='0';
});
//We will remove it from Dom
setTimeout(()=>{
spinnerWrapper.style.display='none';
},2000);

window.addEventListener('scroll',()=>{
    if(window.scrollY > 70){
        Navbar.style.background='Black';
    }else{
        Navbar.style.background='transparent';
    }
});







