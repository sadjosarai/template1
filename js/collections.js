var collections=[
    {
        name : "Perfume",
        image: "../assets/img/bg-lp-2.jpg",
        details:"nshgk zjhdj hzdhkjz kb , jkjghdejdh  jzdh kj  by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 10,
    },
    {
        name : "Natural",
        image: "../assets/img/bg-lp-3.jpg",
        details:" hskjbzhb hskg igi ks zdhvchvdczd by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 78,
    },
    {
        name : "Skin Care",
        image: "../assets/img/bg-lp.jpg",
        details:"scki vavj zkje ejb eh by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 56,
    },
    {
        name : "Head tools",
        image: "../assets/img/lp-bg-1.jpg",
        details: "nkjshu u s kbsb dbhgd akzdbzkd dkazjgdkzabnaz d kb bzjdb d zdb jznd bd dbzakjb dzdk bkd b",
        purchase : 109,
    },
    {
        name : "Woman jewelry",
        image: "../assets/img/head.jpg",
        details:"hueu  hfeuh o hefu h uoehfenfo neof ohf by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 81,
    },
]
function fill(){
    let show=document.querySelector('.collection-details');
    let name=document.querySelector('.collection-details #details .collection-name h2');
    let desc=document.querySelector('.collection-details #details .collection-description p');
    for(let col of collections){
        let e=document.createElement('div');
        let h=document.createElement('h2');
        let p=document.createElement('p');
        h.innerText=col.name;
        p.innerText=col.details;
        p.style.display='none';
        h.style.display='none';
        e.appendChild(h);
        e.appendChild(p);
        e.classList.add('thumbnail');
        e.style.backgroundImage="url('"+col.image+"')";
        e.style.backgroundSize="cover";
        e.style.cursor="pointer";
        e.addEventListener('click', function(a){
            let children=a.target.childNodes;
            show.style.backgroundImage=a.target.style.backgroundImage;
            name.innerText=children[0].innerText;
            desc.innerText=children[1].innerText;
        });
        document.querySelector('.collection-list').appendChild(e);
    }
    show.style.backgroundImage="url('"+collections[0].image+"')";
    show.style.backgroundSize="cover";
    name.innerText=collections[0].name;
    desc.innerText=collections[0].details;
}
window.onload=fill;
let cart=document.querySelector(".chart");
document.querySelector(".chart-button").onclick=(e)=>{
    e.preventDefault();
    if(cart.style.width!="0px"){
        cart.style.width="0px";
    }else{
        if(window.innerWidth<="360"){
            cart.style.width="100%";
        }else{
            cart.style.width="360px";
        }
    }
};
document.querySelector('#close-btn').onclick=()=>{
    cart.style.width="0px";
};
