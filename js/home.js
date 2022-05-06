let nav=document.querySelector('.navbar');
let a=document.querySelectorAll('#navbarNav a');
let b=document.querySelector('#navbarNav a');

let w=window.innerWidth;
document.onscroll = function (){scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        nav.classList.add('bg-ps');
    }else{
        nav.classList.remove('bg-ps');
        a.style.color='#ab47bc';
        b.style.color='white';
    }
}