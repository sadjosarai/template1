var collections=[
    {
        name : "Perfume",
        image: "https://www.shutterstock.com/fr/image-illustration/3d-display-podium-pastel-pink-flower-1881237022",
        details:"nshgk zjhdj hzdhkjz kb , jkjghdejdh  jzdh kj  by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 10,
    },
    {
        name : "Natural",
        image: "https://www.shutterstock.com/fr/image-illustration/cosmetic-background-product-presentation-bottle-on-1722876883",
        details:" hskjbzhb hskg igi ks zdhvchvdczd by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 78,
    },
    {
        name : "Skin Care",
        image: "https://www.shutterstock.com/fr/image-photo/skincare-routine-step-healthy-skin-woman-1416346496",
        details:"scki vavj zkje ejb eh by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 56,
    },
    {
        name : "Head tools",
        image: "https://www.shutterstock.com/fr/image-photo/hair-dresser-tool-set-leather-bag-1163342365",
        details: "nkjshu u s kbsb dbhgd akzdbzkd dkazjgdkzabnaz d kb bzjdb d zdb jznd bd dbzakjb dzdk bkd b",
        purchase : 109,
    },
    {
        name : "Woman jewelry",
        image: "https://www.shutterstock.com/fr/image-photo/portrait-beautiful-woman-jewelry-make-89038666",
        details:"hueu  hfeuh o hefu h uoehfenfo neof ohf by nya naya nya hkdbjdbfefkefb kdfdk fbe kjdfk dfjefkjf kjdf djh df j",
        purchase : 81,
    },
]
function fill(){
    for(let col in collections){
        let e=document.createElement('div');
        e.classList.add('thumbnail');
        e.style.backgroundImage.url=col.image;
        document.querySelector('.collection-list').appendChild(e);
    }
}
window.onload(fill());