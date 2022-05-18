let products=[
    {
        name : "Product 1",
        image: "../assets/img/bg-lp-2.jpg",
        details:"nshgk zjhdj hzdhkjz kb , jkjghdejdh  jzdh kj  by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 10,
    },
    {
        name : "Product 2",
        image: "../assets/img/bg-lp-3.jpg",
        details:" hskjbzhb hskg igi ks zdhvchvdczd by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 78,
    },
    {
        name : "Product 3",
        image: "../assets/img/bg-lp.jpg",
        details:"scki vavj zkje ejb eh by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 56,
    },
    {
        name : "Product 4",
        image: "../assets/img/lp-bg-1.jpg",
        details: "nkjshu u s kbsb dbhgd akzdbzkd dkazjgdkzabnaz d kb bzjdb d zdb jznd bd dbzakjb dzdk bkd b",
        purchase : 109,
    },
    {
        name : "Product 5",
        image: "../assets/img/head.jpg",
        details:"hueu  hfeuh o hefu h uoehfenfo neof ohf by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 81,
    },
    {
        name : "Product 6",
        image: "../assets/img/bg-lp-2.jpg",
        details:"nshgk zjhdj hzdhkjz kb , jkjghdejdh  jzdh kj  by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 12,
    },
    {
        name : "Product 7",
        image: "../assets/img/bg-lp-3.jpg",
        details:" hskjbzhb hskg igi ks zdhvchvdczd by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 68,
    },
    {
        name : "Product 8",
        image: "../assets/img/bg-lp.jpg",
        details:"scki vavj zkje ejb eh by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 46,
    },
    {
        name : "Product 9",
        image: "../assets/img/lp-bg-1.jpg",
        details: "nkjshu u s kbsb dbhgd akzdbzkd dkazjgdkzabnaz d kb bzjdb d zdb jznd bd dbzakjb dzdk bkd b",
        purchase : 19,
    },
    {
        name : "Product 10",
        image: "../assets/img/head.jpg",
        details:"hueu  hfeuh o hefu h uoehfenfo neof ohf by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 80,
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
    let show=document.querySelector('.products-list');
    let slide=document.querySelector('.glide__slides');
    for(let prod of products){
        let e=document.createElement('div');
        let i=document.createElement('img');
        let d2=document.createElement('div');
        let h=document.createElement('h5');
        let p=document.createElement('p');
        let a=document.createElement('a');
        h.innerText=prod.name;
        p.innerText=prod.details;
        i.src=prod.image;
        a.innerText='add to cart';
        e.classList.add('card');
        e.style.width="20rem";
        d2.classList.add('card-body');
        h.classList.add('card-title');
        p.classList.add('card-text');
        a.classList.add('btn');
        a.classList.add('bg-ps');
        d2.appendChild(h);
        d2.appendChild(p);
        d2.appendChild(a);
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
        slide.appendChild(l);
    }
}
window.onload=fill;