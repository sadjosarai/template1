//import {inputArray as dataForm, sInput as sexInput, ver as signedUp } from './modules/signup.js';
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
document.querySelector('#close-btn').onclick=(e)=>{
    e.preventDefault();
    cart.style.width="0px";
};
let products=[
    {
        name : "Product 1",
        image: "../assets/img/bg-lp-2.jpg",
        details:"nshgk zjhdj hzdhkjz kb , jkjghdejdh  jzdh kj  by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 10,
        price :12,
        quantity : 25
    },
    {
        name : "Product 2",
        image: "../assets/img/bg-lp-3.jpg",
        details:" hskjbzhb hskg igi ks zdhvchvdczd by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 78,
        price : 39,
        quantity : 10
    },
    {
        name : "Product 3",
        image: "../assets/img/bg-lp.jpg",
        details:"scki vavj zkje ejb eh by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 56,
        price : 19,
        quantity : 76
    },
    {
        name : "Product 4",
        image: "../assets/img/lp-bg-1.jpg",
        details: "nkjshu u s kbsb dbhgd akzdbzkd dkazjgdkzabnaz d kb bzjdb d zdb jznd bd dbzakjb dzdk bkd b",
        purchase : 109,
        price : 6,
        quantity : 7
    },
    {
        name : "Product 5",
        image: "../assets/img/head.jpg",
        details:"hueu  hfeuh o hefu h uoehfenfo neof ohf by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 81,
        price : 8,
        quantity : 5
    },
    {
        name : "Product 6",
        image: "../assets/img/bg-lp-2.jpg",
        details:"nshgk zjhdj hzdhkjz kb , jkjghdejdh  jzdh kj  by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 12,
        price : 5,
        quantity : 2
    },
    {
        name : "Product 7",
        image: "../assets/img/bg-lp-3.jpg",
        details:" hskjbzhb hskg igi ks zdhvchvdczd by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 68,
        price : 7,
        quantity : 2
    },
    {
        name : "Product 8",
        image: "../assets/img/bg-lp.jpg",
        details:"scki vavj zkje ejb eh by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 46,
        price : 6,
        quantity : 17
    },
    {
        name : "Product 9",
        image: "../assets/img/lp-bg-1.jpg",
        details: "nkjshu u s kbsb dbhgd akzdbzkd dkazjgdkzabnaz d kb bzjdb d zdb jznd bd dbzakjb dzdk bkd b",
        purchase : 19,
        price : 21,
        quantity : 27
    },
    {
        name : "Product 10",
        image: "../assets/img/head.jpg",
        details:"hueu  hfeuh o hefu h uoehfenfo neof ohf by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 80,
        price : 19,
        quantity : 8
    },
];
let obj=[
    {
        image:"https://png.pngtree.com/png-clipart/20210416/ourmid/pngtree-summer-green-beach-items-png-image_3227691.jpg"
    },
    {
        image:"https://png.pngtree.com/png-vector/20191114/ourmid/pngtree-set-of-realistic-glossy-metallic-balloons-png-image_1987616.png"
    },
    {
        image:"https://png.pngtree.com/png-clipart/20210414/ourmid/pngtree-jesus-is-on-the-heavenly-day-png-image_3214721.jpg"
    },
    {
        image:"https://png.pngtree.com/png-clipart/20210416/ourmid/pngtree-summer-green-beach-items-png-image_3227691.jpg"
    },
    {
        image:"https://png.pngtree.com/png-vector/20191114/ourmid/pngtree-set-of-realistic-glossy-metallic-balloons-png-image_1987616.png"
    },
    {
        image:"https://png.pngtree.com/png-clipart/20210414/ourmid/pngtree-jesus-is-on-the-heavenly-day-png-image_3214721.jpg"
    },
    
]

function fill(){
    let glide=document.querySelector('.glide__track');
    let show=document.querySelector('.products-list');
    let ul=document.createElement('ul');
    ul.classList.add('glide__slides');
    ul.style.width="100%";
    for(let prod of products){
        let e=document.createElement('div');
        let i=document.createElement('img');
        let d2=document.createElement('div');
        let d3=document.createElement('div');
        let input=document.createElement('input');
        input.value='0';
        let h=document.createElement('h5');
        d3.classList.add('card-title');
        let d4=document.createElement('div');
        d4.classList.add('card-purchase-wrapper');
        let q=document.createElement('span');
        q.classList.add('badge','badge-pill','badge-secondary');
        let s=document.createElement('span');
        s.classList.add('badge','badge-info','badge-secondary');
        let p=document.createElement('p');
        let a=document.createElement('a');
        s.classList.add('price');
        s.innerText=prod.price+' XAF';
        q.innerText=prod.quantity;
        h.innerText=prod.name;
        h.appendChild(q);
        d3.appendChild(h);
        d3.appendChild(s);
        p.innerText=prod.details;
        i.src=prod.image;
        a.innerText='add to cart';
        e.classList.add('card');
        e.style.width="20rem";
        d2.classList.add('card-body');
        p.classList.add('card-text');
        a.classList.add('btn');
        a.classList.add('bg-ps');
        d4.appendChild(input);
        d4.appendChild(a);
        d2.appendChild(d3);
        d2.appendChild(p);
        d2.appendChild(d4);
        e.appendChild(i);
        e.appendChild(d2);
        show.appendChild(e);
    }
    for(let i=0;i<6;i++){
        let l=document.createElement('li');
        l.classList.add('glide__slide');
        let img=document.createElement('img');
        img.src=obj[i].image;
        img.alt='product '+i;
        l.appendChild(img);
        ul.appendChild(l);
        glide.appendChild(ul);
    }
    new Glide('.multi1', {
        type: 'carousel',
        autoplay: 2500,
        perView: 3,
        breakpoints: {
            600: {
                perView: 1
            },
            900: {
                perView: 2
            },
            1200: {
                perView: 3
            }
        }
        }).mount();
}


