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
        name : "Woman jewerly",
        image: "../assets/img/head.jpg",
        details:"hueu  hfeuh o hefu h uoehfenfo neof ohf by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 81,
    },
]
let products=[
    {
        name : "Product 1",
        image: "../assets/img/bg-lp-2.jpg",
        details:"nshgk zjhdj hzdhkjz kb , jkjghdejdh  jzdh kj  by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 10,
        price :12,
        quantity : 25,
        collections: 'Perfume'
    },
    {
        name : "Product 2",
        image: "../assets/img/bg-lp-3.jpg",
        details:" hskjbzhb hskg igi ks zdhvchvdczd by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 78,
        price : 39,
        quantity : 10,
        collections: 'Natural'
    },
    {
        name : "Product 3",
        image: "../assets/img/bg-lp.jpg",
        details:"scki vavj zkje ejb eh by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 56,
        price : 19,
        quantity : 76,
        collections: 'Head tools'
    },
    {
        name : "Product 4",
        image: "../assets/img/lp-bg-1.jpg",
        details: "nkjshu u s kbsb dbhgd akzdbzkd dkazjgdkzabnaz d kb bzjdb d zdb jznd bd dbzakjb dzdk bkd b",
        purchase : 109,
        price : 6,
        quantity : 7,
        collections: 'Woman jewerly'
    },
    {
        name : "Product 5",
        image: "../assets/img/head.jpg",
        details:"hueu  hfeuh o hefu h uoehfenfo neof ohf by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 81,
        price : 8,
        quantity : 5,
        collections: 'Perfume'
    },
    {
        name : "Product 6",
        image: "../assets/img/bg-lp-2.jpg",
        details:"nshgk zjhdj hzdhkjz kb , jkjghdejdh  jzdh kj  by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 12,
        price : 5,
        quantity : 2,
        collections: 'Perfume'
    },
    {
        name : "Product 7",
        image: "../assets/img/bg-lp-3.jpg",
        details:" hskjbzhb hskg igi ks zdhvchvdczd by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 68,
        price : 7,
        quantity : 2,
        collections: 'Natural'
    },
    {
        name : "Product 8",
        image: "../assets/img/bg-lp.jpg",
        details:"scki vavj zkje ejb eh by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 46,
        price : 6,
        quantity : 17,
        collections: 'Woman jewerly'
    },
    {
        name : "Product 9",
        image: "../assets/img/lp-bg-1.jpg",
        details: "nkjshu u s kbsb dbhgd akzdbzkd dkazjgdkzabnaz d kb bzjdb d zdb jznd bd dbzakjb dzdk bkd b",
        purchase : 19,
        price : 21,
        quantity : 27,
        collections: 'Natural'
    },
    {
        name : "Product 10",
        image: "../assets/img/head.jpg",
        details:"hueu  hfeuh o hefu h uoehfenfo neof ohf by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 80,
        price : 19,
        quantity : 8,
        collections: 'Head tools'
    },
    {
        name : "Product 11",
        image: "../assets/img/head.jpg",
        details:"hueu  hfeuh o hefu h uoehfenfo neof ohf by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 80,
        price : 19,
        quantity : 8,
        collections: 'Skin Care'
    },
];
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
function create_products_board(){
    let product_board=document.createElement('div');
    product_board.classList.add('product_board');
    let product_list_container=document.createElement('div');
    product_list_container.classList.add('product_list_container');
    let product_list=document.createElement('div');
    product_list.classList.add('product_list','row');
    let close_button=document.createElement('a');
    close_button.href="#";
    close_button.classList.add('close_button');
    close_button.innerText="X";
    product_list_container.appendChild(close_button);
    product_list_container.appendChild(product_list);
    product_board.appendChild(product_list_container);
    document.querySelector('body').appendChild(product_board);
    document.querySelector('.close_button').onclick=(e)=>{
        e.preventDefault();
        e.target.parentElement.parentElement.remove();
    }
}
document.querySelector("#see-more").addEventListener('click',(ev)=>{
    ev.preventDefault();
    create_products_board();
    let show=document.querySelector('.product_list');
    let collection_name=ev.target.parentElement.parentElement.querySelector('.collection-name').querySelector('h2').innerText;
    for(let prod of products){
        if(prod.collections===collection_name){
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
    }
});
document.querySelector('.navbar-brand').onclick=()=>{
    window.location.href="../index.html";
}
document.querySelector('.left').onclick=()=>{
    let show=document.querySelector('.collection-details');
    let name=document.querySelector('.collection-details #details .collection-name h2');
    let desc=document.querySelector('.collection-details #details .collection-description p');
    let thumbs=document.querySelectorAll('.thumbnail');
    let thumbs_array=[];
    for(let n of thumbs){
        thumbs_array.push(n);
    }
    var prev=0;
    const index = thumbs_array.findIndex(el=>el.querySelector('h2').innerText===name.innerText);
    if(index==0){
        prev=thumbs_array.length-1;
    }else{
        prev=index-1; 
    }
    name.innerText=thumbs_array[prev].querySelector('h2').innerText;
    desc.innerText=thumbs_array[prev].querySelector('p').innerText;
    show.style.backgroundImage=thumbs_array[prev].style.backgroundImage;
}
document.querySelector('.right').onclick=()=>{
    let show=document.querySelector('.collection-details');
    let name=document.querySelector('.collection-details #details .collection-name h2');
    let desc=document.querySelector('.collection-details #details .collection-description p');
    let thumbs=document.querySelectorAll('.thumbnail');
    let thumbs_array=[];
    for(let n of thumbs){
        thumbs_array.push(n);
    }
    var next=0;
    const index = thumbs_array.findIndex(el=>el.querySelector('h2').innerText===name.innerText);
    if(index==thumbs_array.length-1){
        next=0;
    }else{
        next=index+1; 
    }
    name.innerText=thumbs_array[next].querySelector('h2').innerText;
    desc.innerText=thumbs_array[next].querySelector('p').innerText;
    show.style.backgroundImage=thumbs_array[next].style.backgroundImage;
}
let collection_details=document.querySelector('.collection-details');
let details=collection_details.querySelector('#details');
collection_details.onmouseover=()=>{
    console.log("mouseover "+window.innerWidth);
    if(window.innerWidth<=360){
        details.style.height='50%';
        details.style.transition='0.3s';
        details.style.padding="5px 5px"
    }else{
        details.style.height='30%';
        details.style.transition='0.3s';
        details.style.padding="10px 10px"
    }
};
collection_details.onmouseout=()=>{
    let details=document.querySelector('#details');
    details.style.height='0px';
    details.style.transition='0.3s';
    details.style.padding="0px 0px"
};
collection_details.onclick=()=>{
    console.log(details.style.height);
    if(details.style.height=="0px"){
        details.style.height="30%";
        details.style.transition='0.3s';
        details.style.padding="10px 10px"
    }else{
        details.style.height="0";
        details.style.transition='0.3s';
        details.style.padding="0px 0px"
    }

};