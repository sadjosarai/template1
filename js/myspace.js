let lin=document.querySelectorAll('.link-box');
for(let l of lin){
    let p=l.querySelector('.see-more');
    l.addEventListener('mouseover',function(){
        p.style.height='50%';
        p.style.transition='0.3s';
    })
    l.addEventListener('mouseout',function(){
        p.style.height='0px';
        p.style.transition='0,3s';
    })
}