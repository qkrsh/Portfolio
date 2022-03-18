'use strict';

//Active Navbar
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
    if(window.scrollY>navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');

    }
})

//move to menu
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click',(event)=>{
    const target= event.target;
    const link = target.dataset.link;
    if(link==null){
        return;
    }
    
    const scrollTo=document.querySelector(link);
    scrollTo.scrollIntoView({behavior:'smooth'});     
}
)

//contact me 
const contact = document.querySelector('.home__contact');

contact.addEventListener('click',()=>{
    const scroll=document.querySelector('#contact');
    scroll.scrollIntoView({behavior:'smooth'});     
}
)

//when scroll muddy home part

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
    home.style.opacity=1-window.scrollY/homeHeight 
}
)

//Up button
const upb = document.querySelector('.upbutton');

document.addEventListener('scroll', ()=>{
    if(window.scrollY>300){
        upb.classList.add('visible');
    }
    else if(window.scrollY<300){
        upb.classList.remove('visible');
    }
}
)

upb.addEventListener('click', ()=>{
    const scroll2=document.querySelector('#home');
    scroll2.scrollIntoView({behavior:'smooth'});    
}
)